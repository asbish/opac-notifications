/* eslint-disable no-console */

const os = require('os');
const fs = require('fs');
const path = require('path');
const { IncomingWebhook } = require('@slack/webhook');
const OPACDriver = require('./OPACDriver.js');
const buildMessage = require('./buildMessage.js');

exports.run = (options = {}) => {
  let configHomePath = process.env.XDG_CONFIG_HOME;
  if (!configHomePath) {
    const homedir = os.homedir();
    if (!homedir) throw new Error("Couldn't locate home directory");
    configHomePath = path.join(homedir, '.config');
  }

  fs.readFile(
    path.join(configHomePath, 'opac-notifications', 'config.json'),
    async (readFileErr, configRaw) => {
      if (readFileErr) {
        if (readFileErr.code === 'ENOENT') {
          console.log("Couldn't locate the configuration file");
          return;
        }
        throw readFileErr;
      }

      let config;
      try {
        config = JSON.parse(configRaw);
      } catch (err) {
        throw new Error('Failed to parse the configuration file');
      }

      const slackURL = config.slack?.url;
      if (!slackURL) {
        throw new Error("Missing 'slack.url'");
      }

      const { users } = config;
      if (!Array.isArray(users)) {
        throw new Error("Invalid type of 'users'");
      }

      if (users.length === 0) {
        console.log("Empty 'users', exit immediately");
        return;
      }

      const webhook = new IncomingWebhook(slackURL);

      const runDriver = async (user, idx, refDriver) => {
        const driver = new OPACDriver(user);
        await driver.build(options).then(() => {
          refDriver.set(idx, driver);
        });
        await driver.getUrl();
        await driver.login();
        await driver.goToStatusPage();
        const shelf = await driver.getShelf();
        await driver.logout();
        await driver.quit().then(() => {
          refDriver.delete(idx);
        });

        if (!shelf) {
          throw new Error("Couldn't get OPAC data");
        }

        const message = buildMessage(shelf, user);

        // TODO: Check the differences between this message and the past one.
        const willSend = message.attachments.length !== 0;

        if (options.preventWebhook) {
          message.preventWebhookMetadata = {
            name: user.name || `users[${idx}]`,
            willSend,
          };
          console.log(message);
          return;
        }

        if (willSend) {
          await webhook.send(message);
        }
      };

      await users.reduce((past, user, idx) => {
        if (!user.id || !user.pass) {
          console.log(`Missing 'id' or 'pass' in users[${idx}], skip!`);
          return Promise.resolve();
        }

        const refDriver = new Map();
        return past
          .then(() => runDriver(user, idx, refDriver))
          .catch((err) => {
            console.error(err);
            const driver = refDriver.get(idx);
            if (driver) {
              driver.quit();
              refDriver.delete(idx);
            }
          });
      }, Promise.resolve());
    },
  );
};

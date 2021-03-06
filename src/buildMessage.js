function buildAttachments(shelf, type, obj) {
  return shelf[type].reduce((atta, book) => {
    if (book.alert) {
      if (type === 'onLoan') {
        return {
          ...atta,
          warning: {
            ...atta.warning,
            text: `${atta.warning.text}${book.text}\n`,
          },
        };
      }
      if (type === 'hold') {
        return {
          ...atta,
          notice: {
            ...atta.notice,
            text: `${atta.notice.text}${book.text}\n`,
          },
        };
      }
    }
    return {
      ...atta,
      [type]: {
        ...atta[type],
        text: `${atta[type].text}${book.text}\n`,
      },
    };
  }, obj);
}

function toArrayAttachments(obj) {
  const attachments = [];

  if (obj.notice.text !== '') {
    attachments.push(obj.notice);
  }

  if (obj.warning.text !== '') {
    attachments.push(obj.warning);
  }

  if (obj.onLoan.text !== '') {
    attachments.push(obj.onLoan);
  }

  if (obj.hold.text !== '') {
    attachments.push(obj.hold);
  }

  return attachments;
}

function buildMessage(shelf, { slackId, name }) {
  const onLoan = buildAttachments.bind(null, shelf, 'onLoan');
  const hold = buildAttachments.bind(null, shelf, 'hold');
  const attachments = toArrayAttachments(
    hold(
      onLoan({
        warning: {
          mrkdwn_in: ['text'],
          fallback: 'Warning.',
          color: '#ff0000',
          title: 'WARNING',
          text: '',
        },
        notice: {
          mrkdwn_in: ['text'],
          fallback: 'Notice.',
          color: '#ffcc00',
          title: 'NOTICE',
          text: '',
        },
        onLoan: {
          mrkdwn_in: ['text'],
          fallback: 'On Loan.',
          color: '#36a64f',
          title: 'ON LOAN',
          text: '',
        },
        hold: {
          mrkdwn_in: ['text'],
          fallback: 'Hold.',
          color: '#764fa5',
          title: 'HOLD',
          text: '',
        },
      }),
    ),
  );

  const t = 'In Your bookbag!';
  return {
    text: slackId ? `<@${slackId}> ${t}` : name ? `${name}, ${t}` : t,
    attachments,
  };
}

module.exports = buildMessage;

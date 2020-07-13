{ sources ? import ./sources.nix
, pkgs ? import sources.nixpkgs {
    overlays = [(_: _: { niv = import sources.niv {}; })];
    config = {};
  }
, system ? builtins.currentSystem
, nodePackages ? import ./node-composition.nix { inherit pkgs system; }
}:
let
  sourceDir = ../.;

  gitIgnored = (import sources.gitignore { inherit (pkgs) lib; }).gitignoreFilter sourceDir;

  srcIgnored = path: let baseName = builtins.baseNameOf path; in ! (
    builtins.match "^\\..*$" baseName != null ||
    builtins.match "^test/*" baseName != null ||
    baseName == "jsconfig.json" ||
    baseName == "generate.sh"
  );

  src = pkgs.lib.cleanSourceWith {
    src = sourceDir;
    filter = path: type: gitIgnored path type && srcIgnored path;
  };
in
{
  inherit pkgs;
  nodePackages = nodePackages // {
    tarball = nodePackages.tarball.override { inherit src; };
    package = nodePackages.package.override { inherit src; };
    shell = nodePackages.shell.override(oldAttrs: {
      dontNpmInstall = true;
      buildInputs = oldAttrs.buildInputs ++ [
        pkgs.selenium-server-standalone
        pkgs.chromedriver
        pkgs.chromium
      ];
    });
  };
}

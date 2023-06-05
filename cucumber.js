process.env.TS_NODE_IGNORE = "/node_modules/@symbolik//";

const feature = [
  "--require-module ts-node/register",
  "--require features/**/*.ts",
  "--require step_definitions/**/*.ts",
  `--format ${
    process.env.CI || !process.stdout.isTTY ? "progress" : "progress-bar"
  }`,
  "--format usage:reports/usage.txt",
  "--publish-quiet",
  '--tags "not @disabled"',
].join(" ");

module.exports = {
  default: feature,
};

process.env.TS_NODE_IGNORE = "/node_modules/@symbolik//";

const feature = [
  "--require-module ts-node/register",
  "--require features/**/*.ts",
  "--require step_definitions/**/*.ts",
  `--format usage:./reports/report.txt`,
  `--format json:./reports/report.json`,
  `--format html:./reports/report.html`,
  '--tags "not @disabled"',
].join(" ");

module.exports = {
  default: feature,
};

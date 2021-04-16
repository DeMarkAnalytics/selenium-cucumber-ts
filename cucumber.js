const feature = [
  '--require-module ts-node/register',
  '--require features/step_definitions/**/*.ts',
  '--require step_definitions/**/*.ts',
  `--format ${
    process.env.CI || !process.stdout.isTTY ? 'progress' : 'progress-bar'
  }`,
  '--format rerun:@rerun.txt',
  '--format usage:usage.txt',
  '--format message:messages.ndjson',
  '--publish-quiet',
].join(' ')

module.exports = {
  default: feature,
}

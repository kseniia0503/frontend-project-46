#!/usr/bin/env node

const { program } = require('commander')
const { version } = require('../package.json')

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version(version, '-V, --version', 'output the version number')
  .helpOption('-h, --help', 'display help for command')
  .parse(process.argv)

  if (program.opts().help) {
  program.help()
}

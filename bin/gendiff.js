#!/usr/bin/env node

const { program } = require('commander')
const { version } = require('../package.json')

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version(version, '-V, --version', 'output the version number')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format <type>', 'output format')
  .action((filepath1, filepath2) => {
console.log(`Comparing ${filepath1} and ${filepath2}`)
  })
  program.parse(process.argv)
  if (process.argv.length < 3 || program.opts().help) {
  program.help()
}

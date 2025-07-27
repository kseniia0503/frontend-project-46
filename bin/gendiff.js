#!/usr/bin/env node

import { program } from 'commander'
import genDiff from '../index.js'

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0')
  .arguments('<filepath1> <filepath2>')
  .action((filepath1, filepath2) => {
    try {
      const result = genDiff(filepath1, filepath2)
      console.log(result)
    }
    catch (error) {
      console.error('Error:', error.message)
      process.exit(1)
    }
  })

program.parse(process.argv)

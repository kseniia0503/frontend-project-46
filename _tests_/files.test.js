const { test, expect } = require('@jest/globals')
const fs = require('fs')
const path = require('path')
const genDiff = require('../src/diff')

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename)

test('compare flat JSON files', () => {
  const file1 = getFixturePath('file1.json')
  const file2 = getFixturePath('file2.json')
  const expected = fs.readFileSync(getFixturePath('expected.txt'), 'utf-8').trim()
  
  expect(genDiff(file1, file2)).toEqual(expected)
})
/* eslint-env jest */

import { genDiff } from '../src/diff.js'

describe('JSON comparison', () => {
  test('should return correct text diff for flat JSON files', () => {
    const file1 = {
      follow: false,
      host: 'hexlet.io',
      proxy: '123.234.53.22',
      timeout: 50,
    }

    const file2 = {
      host: 'hexlet.io',
      timeout: 20,
      verbose: true,
    }
    const expectedDiff = [
      '  - follow: false',
      '    host: hexlet.io',
      '  - proxy: 123.234.53.22',
      '  - timeout: 50',
      '  + timeout: 20',
      '  + verbose: true',
    ].join('\n');

    const actualDiff = genDiff(file1, file2)
    expect(actualDiff).toBe(expectedDiff)
  })
})

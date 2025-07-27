import { parseFile } from './src/parser.js'
import genDiff from './src/diff.js'

export default (filepath1, filepath2) => {
  const data1 = parseFile(filepath1)
  const data2 = parseFile(filepath2)
  return genDiff(data1, data2)
}

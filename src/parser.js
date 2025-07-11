import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export const parseFile = (filepath) => {
  const absolutePath = path.resolve(process.cwd(), filepath)
  const content = fs.readFileSync(absolutePath, 'utf-8')
  const extension = path.extname(filepath).toLowerCase()

  switch (extension) {
    case '.json':
      return JSON.parse(content)
    default:
      throw new Error(`Unsupported file format: ${extension}`)
  }
}


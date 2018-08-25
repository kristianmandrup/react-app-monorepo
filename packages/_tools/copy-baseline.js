import fs from 'fs-extra'
import dir from 'node-dir'
import path from 'path'

function defaultFilter(files) {
  return files.filter(file => /node_modules/.test(file))
}

export function scaffoldPackage(targetPath, filter) {
  filter = filter || defaultFilter
  targetPath = targetPath || process.cwd()
  const baselinePackagePath = path.resolve(__dirname, '../_blueprint')

  let files = dir.files(baselinePackagePath, {
    sync: true
  })
  files = filter(files)

  files.map(file => {
    console.log('copying', file)
    fs.copy(file, targetPath, (err) => {
      err ? console.error('ERROR', err) : console.log('copied', file);
    })
  })
}

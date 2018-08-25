import fs from 'fs-extra'
import dir from 'node-dir'
import path from 'path'

function defaultFilter(files) {
  return files.filter(file => /node_modules/.test(file))
}

function filterAvoidOverwrite(files, targetPath) {
  return files.filter(file => {
    const targetFilePath = path.join(targetPath, file)
    return !fs.existsSync(targetFilePath)
  })
}

function filterIncludeExclude(files, config = {}) {
  const {
    exclude,
    include
  } = config
  return files.filter(file => {
    const fileName = path.basename(file)
    return (exclude && !exclude.includes(fileName)) && (include && include.includes(fileName))
  })
}


export function scaffoldPackage(targetPath, config = {}) {
  let {
    filter,
    overwrite
  }
  filter = filter || defaultFilter
  overwrite = overwrite || false
  targetPath = targetPath || process.cwd()
  const baselinePackagePath = path.resolve(__dirname, '../_blueprint')

  let files = dir.files(baselinePackagePath, {
    sync: true
  })
  files = filter(files)
  if (overwrite) {
    files = filterAvoidOverwrite(files)
  }

  files.map(file => {
    console.log('copying', file)

    fs.copy(file, targetPath)
      .then(() => console.log('success!'))
      .catch(err => console.error(err))
  })
}

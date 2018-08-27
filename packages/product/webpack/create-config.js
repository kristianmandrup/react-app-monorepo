const {
  basePath
} = require('./base-path')

module.exports = function (env) {
  env = env || 'dev'
  const createWebpackConfig = require(`@tecla5/ui-base-project/webpack/webpack.${env}`)
  return createWebpackConfig({
    basePath
  })
}

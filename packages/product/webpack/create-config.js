const {
  basePath
} = require('./base-path')

module.exports = function (env = 'config') {
  // TODO: always use config and pass env?
  const createWebpackConfig = require(`@tecla5/ui-base-project/webpack/webpack.${env}`)
  const config = createWebpackConfig({
    basePath
  })
  console.log('webpack', JSON.stringify(config, null, 2));
  return config
}

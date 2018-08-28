function createConfig(env) {
  const {
    basePath
  } = require('./base-path')

  const createWebpackConfig = require('@tecla5/ui-base-project/webpack/webpack.config')
  const config = createWebpackConfig({
    basePath,
    env
  })
  console.log('webpack config created', JSON.stringify(config, null, 2));
  return config
}
module.exports = env => {
  return Promise.resolve(createConfig(env))
}

//////////////////////////////////////////////////////////
//  Common paths module (webpack.academy)
//////////////////////////////////////////////////////////
//  author: Jose Quinto - https://blog.josequinto.com
//////////////////////////////////////////////////////////

const resolve = require("path").resolve;
module.exports = opts => {
  const {
    basePath
  } = opts
  // const rootPath = resolve(basePath, "..")
  const rootPath = basePath
  return {
    outputPath: resolve(rootPath, "build"),
    contentBasePath: resolve(rootPath, "public"),
    srcPath: resolve(rootPath, "app/src"),
    // we can't use resolve here because the plugin fails
    bundleVisualizerStatsPath: rootPath + "/dist/stats"
  }
}

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
  console.log('common paths', {
    rootPath
  })
  const paths = {
    outputPath: resolve(rootPath, "build"),
    contentBasePath: resolve(rootPath, "public"),
    srcPath: resolve(rootPath, "./src"),
    // we can't use resolve here because the plugin fails
    bundleVisualizerStatsPath: rootPath + "/dist/stats"
  }
  console.log({
    paths
  })
  return paths
}

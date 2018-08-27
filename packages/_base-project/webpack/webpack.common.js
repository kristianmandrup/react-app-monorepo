//////////////////////////////////////////////////////////
//  WebPack Common (webpack.academy)
//////////////////////////////////////////////////////////
//  author: Jose Quinto - https://blog.josequinto.com
//////////////////////////////////////////////////////////

const createCommonPaths = require("./common-paths");

module.exports = opts => {
  const commonPaths = createCommonPaths(opts)
  var CopyWebpackPlugin = require('copy-webpack-plugin');
  const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

  return {
    target: 'web',
    entry: {
      'bundle': './src/index.tsx'
    },
    resolve: {
      // Add '.ts' and '.tsx' as resolvable extensions.
      extensions: [".ts", ".tsx", ".js"]
    },
    output: {
      filename: 'static/js/[name].[hash].js',
      path: commonPaths.outputPath,

      // There are also additional JS chunk files if you use code splitting.
      chunkFilename: 'static/js/[name].chunk.js',

      // This is the URL that app is served from. We use "/" in development.
      publicPath: './'
    },
    // See https://survivejs.com/webpack/building/bundle-splitting/
    optimization: {
      splitChunks: {
        chunks: "all"
      }
    },
    plugins: [
      new ForkTsCheckerWebpackPlugin({
        checkSyntacticErrors: true
      }),
      new CopyWebpackPlugin(
        [{
          from: 'public'
        }], {
          ignore: [
            // Doesn't copy any files with a html extension
            '*.html',
          ]
        }
      )
    ]
  };
}

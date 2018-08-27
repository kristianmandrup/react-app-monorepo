# Production (Prod)

## Source maps

We generate sourcemaps in production. This is slow but gives good results.
You can exclude the \*.map files from the build during deployment.

`devtool: 'source-map',`

## Optimization

Optimize by uglifying (obfuscate) and minimizing bundle generated.
We target ECMAScript 6 and remove all comments.

```js
optimization: {
  minimize: true,
  minimizer: [
    new UglifyJSPlugin({
      // ...
      beautify: false,
      ecma: 6,
      comments: false,
      mangle: false
    }
  ]
}
```

## Plugins

### HTML generation

Generates an `index.html` file with the `<script>` injected.
Take note of the options used:

- minify the JS
- minify URLs used
- remove comments
- collapse white space
- remove empty attibutes from HTML elements

```js
    plugins: [
      //
      new HtmlWebpackPlugin({
        inject: true,
        template: commonPaths.contentBasePath + '/index.html',
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          removeStyleLinkTypeAttributes: true,
          keepClosingSlash: true,
          minifyJS: true,
          minifyURLs: true,
        },
      }),
```

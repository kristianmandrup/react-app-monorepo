# Webpack Development (Dev) config

## Source maps

We output inline source maps for easier debugging

`devtool: 'inline-source-map',`

We also add /_ filename _/ comments to generated require()s in the output.

```js
  output: {
    //
    pathinfo: true,
  },
```

## Dev Server

We enable Hot Module Reloading (HMR)

`hot: true, // enable HMR on the server`

## Serve static files

We make it match the output `publicPath`

`publicPath: '/',`

## Stats

All the stats options here: https://webpack.js.org/configuration/stats/

```js
stats: {
  colors: true, // color is life
  chunks: false, // this reduces the amount of stuff I see in my terminal; configure to your needs
  'errors-only': true
}
```

## Plugins

### Html

Generates an `index.html` file with the `<script>` injected, which references the bundle (main `.js` file) being served.

```js
new HtmlWebpackPlugin({
  inject: true,
  template: commonPaths.contentBasePath + '/index.html',
}),
```

## Hot Module Replacement

Enables HMR globally

`new webpack.HotModuleReplacementPlugin(),`

## Rules

### TypeScript

Once TypeScript is configured to output source maps we need to tell webpack
to extract these source maps and pass them to the browser,
this way we will get the source file exactly as we see it in our code editor.

All files with a `.ts` or `.tsx` extension will be handled by `ts-loader`

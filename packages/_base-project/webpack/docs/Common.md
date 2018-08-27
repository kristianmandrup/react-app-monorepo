# Common

## Paths

Paths used in webpack config files are found in `common-paths.js`

Note: They currently rely on `__dirname` which we would need to change!

```js
    outputPath: resolve(__dirname, "../", "build"),
    contentBasePath: resolve(__dirname, "../", "public" ),
    srcPath: resolve(__dirname, "../app/src"),
    bundleVisualizerStatsPath: "../dist/stats"
```

## Create a bundle

Expects the main file to be located at `./app/src/index.tsx` in each package

```js
entry: {
    'bundle': './app/src/index.tsx'
},
```

Outputs a file in `static/js/[name].[hash].js`

`filename: 'static/js/[name].[hash].js',`

## File splitting into chunks

There are also additional JS chunk files if you use code splitting.

`chunkFilename: 'static/js/[name].chunk.js',`

## App path

This is the URL that app is served from. We use `/` in development.

`publicPath: './'`

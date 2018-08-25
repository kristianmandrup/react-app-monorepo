# Scaffold

Copy `scaffold.js` from `_scaffold` package into target package (to be scaffolded).

Optional:

- copy `package.json` (dependencies)
- run `lerna bootstrap --hoist` as usual to update dependencies

Now from target package run:

```bash
node scaffold.js
```

To finetune scaffolding you can edit arguments used in scaffold.
To avoid overwrite of existing files:

```js
scaffoldPackage(targetPath, { overwrite: false });
```

You can combine this with the `filter` argument to pass a function to filter the files.

`filter` returns new array with all elements that pass the test

You can also simply supply an `exclude` or `include` list as follows:

```js
scaffoldPackage(targetPath, { overwrite: true, exclude: ["package.json"] });
```

## Scripts

Alternatively also copy `"scripts"` entry from `package.json` to target package

```json
  "scripts": {
    "scaffold": "node scaffold.js"
  },
```

Run `npm run scaffold` from package root.

If `blueprint` package is updated, using the scaffold script can keep changes in sync.

Having a `scaffold` script makes it interoperable with `lerna` so you can scaffolding on multiple packages in one big SWOOP!

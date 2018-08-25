# Tools

Copy `scaffold.js` and `package.json` (dependencies) from `_scaffold` package into target package.

Then from target package run:

```bash
node scaffold.js
```

To finetune scaffold, you can edit arguments in scaffold, such as to avoid overwrite:

```js
scaffoldPackage(targetPath, { overwrite: false });
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

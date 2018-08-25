# Mono repo structure

## Yarn workspaces

Workspaces are a new way to setup your package architecture. It allows you to setup multiple packages in such a way that you only need to run yarn install once to install all of them in a single pass.

Your dependencies can be linked together, which means that your workspaces can depend on one another while always using the most up-to-date code available. This is also a better mechanism than yarn link since it only affects your workspace tree rather than your whole system.

When both projects are used together, Lerna delegates the dependencies management to Yarn.

```txt
├── node_modules
├── packages
│   ├── awesome
│   │   └── package.json
│   ├── awesome-module1
│   │   ├── src
│   │   ├── test
│   │   ├── babel.config.js
│   │   ├── eslint.config.js
│   │   ├── jest.config.js
│   │   ├── prettier.config.js
│   │   ├── package.json
│   │   └── task -> ../../scripts/task
│   ├── awesome-module2
│   │   └── ...
│   ├── ...
├── scripts
│   ├── publish
│   └── task
├── lerna.json
└── package.json
```

arn handles the dependencies.
Lerna handles tasks that affect multiple packages (compile/test/lint all modules).

- One folder per package inside packages.
- All packages share the same structure.
- Each package defines only its runtime dependencies.

All the tooling and `devDependencies` are shared and live in its own package.

- Each package contains the required configuration files for the tooling.
- Each file extends a common base configuration (we use Babel, Jest and ESlint + Prettier to compile, test and lint/prettify the code).
- Each package symlinks a common task script that defines how the different tools must be invoked.
- There is a “hub” package. It depends on all the other packages and allows easy usage of the framework (a single awesome dependency).
- All packages share the version number. We use lerna to update the version number in one fell swoop.
- Publication is handled by a custom publish script that will be used by the CI environment.
- It’s easy to add new packages because they share the same structure. There also are plenty of extension points: any package can add something unique if it’s necessary (for example, its own linting rules).

## Package customization

Each package also has their own:

- `tslint.config.js`
- `jest.config.js`
- `prettier.config.js`

By default they just import the shared config exposed by the tools:

`module.exports = require("awesome-tools/eslint.config.js");`

and if needed they can extend/override the config. It’s plain JS!

```js
const baseConfig = require("awesome-tools/eslint.config.js");

module.exports = {
  ...baseConfig,
  globals: {
    ...baseConfig.globals,
    anotherGlobal: true
  }
};
```

### The publish script

To publish the packages we rely on our CI server. Using a custom script we’ll check each publishable package looking for the current version in the registry. If we pushed a new version to the repo, the module will be published.

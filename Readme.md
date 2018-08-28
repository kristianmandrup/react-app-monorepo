# Web service shop

## Mono repo setup

See [Mono repo setup with Lerna and Yarn workspaces](https://medium.com/trabe/monorepo-setup-with-lerna-and-yarn-workspaces-5d747d7c0e91)

Also see [Mono repo structure](./docs/Monorepo.md)

See [An Opinionated Web Application Solution](https://codeburst.io/an-opinionated-web-application-solution-part-6-19eaa06f33e5) for some more insights on how to structure React app as Lerna mon repo!

Note: 6 parts series!

## Packages

The packages are based on [react-typescript-webpack2-cssModules-postCSS](git://github.com/jquintozamora/react-typescript-webpack2-cssModules-postCSS.git)
boilerplate project.

We include a working project in `packages/react-typescript-mobx`.

I have attempted to mirror this in `packages/product` so far without luck. Keeps complaining about missing typescript loader to handle JSX syntax. Perhaps the webpack config structure has changed again, since 3.x.

## Docs

See [Docs](./docs/)

## Getting started

```bash
yarn
yarn install v1.5.1
info No lockfile found.
[1/4] 🔍  Resolving packages...
```

```bash
$ lerna bootstrap --hoist
lerna notice cli v3.1.4
lerna info Bootstrapping 5 packages
lerna info Installing external dependencies
lerna info Symlinking packages and binaries
lerna success Bootstrapped 5 packages
```

This command will download (external) and setup all the dependencies for the projects. The hoist option brings up all the shared dependencies to the root of the sample repo; no reason to store three copies of webpack on the disk.

## Commands

The main `package.json` includes the following npm wrappers of lerna commands:

- `bootstrap` Bootstrap all projects
- `compile` Compiles all projects
- `clean` Clean all projects
- `lint` Lint all projects
- `test` Run tests on all projects
- `update-version` Update version of all packages
- `check-packages` Check if all packages are clean, lint ok and tests pass
- `publish-packages` Publish all packages

## Packages

- `_baseproject` shared project configurations (used by each UI package)
- `_hub` exports all public packages
- `_simple-express-server` sample express server. Can be used to build basic backend API
- `_tools` various small tools such as used for `copy-blueprint` used to copy all blueprint files to target package
- `_scaffold` tool to scaffold an existing package and keep it updated with the blueprint project.

## Blueprints

Blueprints can be found in the `blueprints` folder

- `base` basic blueprint UI package to create new react component packages from
- `collection` collection blueprint
- `item` single item blueprint
- `display` used to create a display, including any number of collections and items

### Base

The package found in `blueprints/base` can be used as a blueprint for most components.

It currently includes:

- `App`
- `Component`
- `Store`
- `Services`

Each package should have an `export.ts` in `/app/src`:

```ts
export { Component } from "./Component";
export { Store } from "./Store";
export { Services } from "./Services";
```

### Item

The package found in `blueprints/item` can be used as a blueprint for a single item component, such as user profile, user settings or similar.

### Collection

To display and manage a list of an entity and actions to perform upon it

### Display

To make a display of information/navigatuon etc. that includes one or more lists and items

## App structure

An app can be constructed from the following building blocks (see blueprints):

- `item` present a single entity and actions to perform upon it
- `collection` present a list of an entity and actions to perform upon it
- `display` present one or more lists and items

Compose building blocks into higher level building blocks to form a tree, one package per branch or leaf.

## Linting TypeScript code

TODO: We still need some work here!

Use the setup described [here](https://codeburst.io/an-opinionated-web-application-solution-part-5-40e95f6802d6)

The final linting packages and configurations for the sample project are:

- `prettier`: Opinionated code formatter
- `tslint`: TSLint is an extensible static analysis tool that checks TypeScript code for readability, maintainability, and functionality errors.
- `tslint-config-prettier`: Do you want to use tslint and prettier without conflicts? - tslint-config-prettier disables all conflicting rules that may cause such problems.
- `tslint-loader`: Tslint loader for Webpack.
- `tslint-plugin-prettier`: Runs Prettier as a TSLint rule and reports differences as individual TSLint issues.
- `tslint-react`: Lint rules related to React & JSX for TSLint.

`tslint.json`

```json
{
  "extends": ["tslint:recommended", "tslint-react", "tslint-config-prettier"],
  "rulesDirectory": ["tslint-plugin-prettier"],
  "rules": {
    "prettier": true,
    "interface-name": false
  }
}
```

`.prettierrc`

```json
{
  "printWidth": 100,
  "singleQuote": true,
  "trailingComma": "es5"
}
```

## VS Code

_Typescript Mono Repo Import Fixer_ is a vscode extension that fixes imports of TypeScript files from sibling packages in a mono repo (e.g. Lerna)

- [vscode-mono-repo-import-fixer](https://marketplace.visualstudio.com/items?itemName=q.typescript-mono-repo-import-helper)

## Dependencies

We've had to exclude `mobx-schema-form` due to some dependency conflicts (needs an update or find updated fork!)

```json
  "mobx-schema-form": "^1.3.6",
```

## TODO

Make sure all blueprint packages can run independently as an app

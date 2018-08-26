# Web service shop

## Mono repo setup

See [Mono repo setup with Lerna and Yarn workspaces](https://medium.com/trabe/monorepo-setup-with-lerna-and-yarn-workspaces-5d747d7c0e91)

Also see [Mono repo structure](./docs/Monorepo.md)

See [An Opinionated Web Application Solution](https://codeburst.io/an-opinionated-web-application-solution-part-6-19eaa06f33e5) for some more insights on how to structure React app as Lerna mon repo!

Note: 6 parts series!

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

## Packages

- `_baseproject` shared project configurations (used by each UI package)
- `_blueprint` blueprint UI package to create new UI packages from
- `_hub` exports all public packages
- `_simple-express-server` sample express server. Can be used to build basic backend API
- `_tools` various small tools such as used for `copy-blueprint` used to copy all blueprint files to target package
- `_scaffold` tool to scaffold an existing package and keep it updated with the blueprint project.

### Baseline

The package found in `packages/_blueprint` can be used as a blueprint for most components.

It currently includes:

- `App`
- `Component`
- `Store`
- `Services`

## App structure

### Baseline

The package found in `packages/_blueprint` can be used as a blueprint for most components.

It currently includes:

- `App`
- `Component`
- `Store`

Each package should have an `index.ts` in `/app/src`:

```ts
export { Component } from "./Component";
export { Store } from "./Store";
```

Note: We might in the future want to extract the `Store` part to separate independent packages.

## VS Code

_Typescript Mono Repo Import Fixer_ is a vscode extension that fixes imports of TypeScript files from sibling packages in a mono repo (e.g. Lerna)

- [vscode-mono-repo-import-fixer](https://marketplace.visualstudio.com/items?itemName=q.typescript-mono-repo-import-helper)

## Dependencies

We've had to exclude `mobx-schema-form` due to some dependency conflicts (needs an update or find updated fork!)

```json
  "mobx-schema-form": "^1.3.6",
```

## TODO

Make sure `_baseline` can run as an app

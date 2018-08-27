# Web service shop

## Mono repo setup

See [Mono repo setup with Lerna and Yarn workspaces](https://medium.com/trabe/monorepo-setup-with-lerna-and-yarn-workspaces-5d747d7c0e91)

Also see [Mono repo structure](./docs/Monorepo.md)

See [An Opinionated Web Application Solution](https://codeburst.io/an-opinionated-web-application-solution-part-6-19eaa06f33e5) for some more insights on how to structure React app as Lerna mon repo!

Note: 6 parts series!

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

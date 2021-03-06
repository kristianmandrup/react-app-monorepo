# Tech stack

## Framework

- [React](https://reactjs.org/)
- [Recompose](https://recompose.docsforhumans.com/) compose higher order components
- [React DOM Router](https://reacttraining.com/react-router/web/guides/philosophy)

## Styling

### UI/Layout

- [Material UI - React](https://material-ui.com/)
- [Ant Design - React](https://ant.design/docs/react/introduce)

See [Ant Design in TypeScript](https://ant.design/docs/react/use-in-typescript)

Boilerplate project: [Create React App with TypeScript and Ant Design](https://github.com/comerc/cra-ts-antd)

## Widgets

- [React widgets](https://jquense.github.io/react-widgets/) Special form widgets for drop downs, date selection etc.

### Forms

- [Formik](https://www.npmjs.com/package/formik) Forms for React made easy

Formik handles form state for you. It is thus an "uncontrolled" component. This is by design, as form state is always local. You should instead only update your mobx store once the form has been submitted (in `handleSubmit`) through a mobx action.

### CSS

- [JSS](https://github.com/cssinjs/jss)
- [React JSS](http://cssinjs.org/react-jss/)

## Store

- [MobX](https://mobx.js.org/)
- [MobX State Tree](https://github.com/mobxjs/mobx-state-tree)

## Testing

- [Jest](https://jestjs.io/)
- [Enzyme](http://airbnb.io/enzyme/)
- [Jest Enzyme](https://www.npmjs.com/package/jest-enzyme)

### Coverage

- [CodeCov](https://codecov.io/) Testing code coverage

## Bundling

- [Webpack](https://webpack.js.org/) Bundle app for distribution and use on web page
- [Source map loader](https://github.com/webpack-contrib/source-map-loader) Source maps for Webpack

## Code

- [TypeScript](https://www.typescriptlang.org/) Static typing and modern JS
- [TS Lint](https://palantir.github.io/tslint/) Linting

## Development workflow

- [React hot loader](https://gaearon.github.io/react-hot-loader/) Hot loading during development
- [React dev utils](https://www.npmjs.com/package/react-dev-utils) Dev utils for debugging
- [MobX React devtools](https://github.com/mobxjs/mobx-devtools/blob/master/README.md#mobx-state-tree)
- [MobX State Tree devtools](https://github.com/mobxjs/mobx-react-devtools)

## Server

- [Express server](https://expressjs.com/) Express Web server (API)

### Development

- [JSON server](https://github.com/typicode/json-server) JSON REST server (ie. Fake REST API)
- [Husky](https://www.npmjs.com/package/husky) prevent bad commits
- [Lerna](https://lernajs.io) Mono repo management

### Services/API

- [AJV](https://ajv.js.org/) fastest JSON Schema Validator

```js
const validate = new Ajv().compile(SCHEMA);
const valid = validate(json);
```

## PWA

- [Manifest](https://developers.google.com/web/fundamentals/web-app-manifest/)
- [Service Worker](https://developers.google.com/web/ilt/pwa/introduction-to-service-worker-slides) For smart resource caching
- [Workbox](https://developers.google.com/web/tools/workbox/) PWA toolbox
- [Fav icons](https://realfavicongenerator.net/) Browser and Mobile icons

# Product component

## Scripts

- `poststart` run dev after `start` script (but currently no start script!)
- `dev` run webpack dev server in development mode
- `build:prod:bundleVisualizer` visualize production bundle
- `build:prod:bundleAnalyzer` analyze production bundle
- `stats` stats on production bundle
- `build:prod:stats` generate stats on production bundle
- `build` build bundle for production
- `test` run Jest tests in JSDOM environment
- `lint` Run TSLint
- `test:coverage` Run test coverage (requires CodeCov key)
- `precommit` run Lint before commit
- `prepush` Run all tests before push to repo
- `debug:prod` debug webpack prod environment
- `debug` debug webpack config

## Husky commit hooks

```
    "poststart": "npm run dev",
    "precommit": "lint-staged",
    "prepush": "npm run test",
```

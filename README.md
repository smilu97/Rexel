### JSX Dev dependencies

```sh
yarn add -D @babel/core @babel/plugin-proposal-class-properties @babel/plugin-proposal-decorators @babel/plugin-proposal-do-expressions @babel/plugin-proposal-export-default-from @babel/plugin-proposal-export-namespace-from @babel/plugin-proposal-function-sent @babel/plugin-proposal-json-strings @babel/plugin-proposal-logical-assignment-operators @babel/plugin-proposal-nullish-coalescing-operator @babel/plugin-proposal-numeric-separator @babel/plugin-proposal-optional-chaining @babel/plugin-proposal-pipeline-operator @babel/plugin-proposal-throw-expressions @babel/plugin-syntax-dynamic-import @babel/plugin-syntax-import-meta @babel/plugin-transform-react-jsx @babel/polyfill @babel/preset-env babel-loader webpack webpack-cli
```

### Sample webpack.config.js

```js
const path = require('path');

module.exports = {
  target: 'node',
  mode: 'development',
  entry: './test.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js',
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
    ],
  },
};
```

### Sample .babelrc

```json
{
  "presets": [],
  "plugins": [
    [
      "@babel/plugin-transform-react-jsx",
      {
        "pragma": "Rexel.create",
        "pragmaFrag": "Rexel.fragment"
      }
    ],
    "@babel/plugin-syntax-dynamic-import",
    "@babel/plugin-syntax-import-meta",
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-proposal-json-strings",
    [
      "@babel/plugin-proposal-decorators",
      {
        "legacy": true
      }
    ],
    "@babel/plugin-proposal-function-sent",
    "@babel/plugin-proposal-export-namespace-from",
    "@babel/plugin-proposal-numeric-separator",
    "@babel/plugin-proposal-throw-expressions",
    "@babel/plugin-proposal-export-default-from",
    "@babel/plugin-proposal-logical-assignment-operators",
    "@babel/plugin-proposal-optional-chaining",
    [
      "@babel/plugin-proposal-pipeline-operator",
      {
        "proposal": "minimal"
      }
    ],
    "@babel/plugin-proposal-nullish-coalescing-operator",
    "@babel/plugin-proposal-do-expressions"
  ]
}
```
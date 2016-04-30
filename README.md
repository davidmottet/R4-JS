# R4 library



## Features

* Webpack based.
* ES6 as a source.
* Exports in a [umd](https://github.com/umdjs/umd) format so your library works everywhere.
* ES6 test setup with [Mocha](http://mochajs.org/) and [Chai](http://chaijs.com/).
* Linting with [ESLint](http://eslint.org/).

## Folder

```
.git
lib/
  R4.min.js
  R4.min.js.map
node_modules/
src/
  index.js
test/
  library.spec.js
.babalrc
.eslintrc
LICENCE
package.json
README.md
webpack.config.js

```

## Scripts

* `npm run build` - produces production version of your library under the `lib` folder
* `npm run dev` - produces development version of your library and runs a watcher
* `npm run test` - well ... it runs the tests :)

## Readings

* [Start your own JavaScript library using webpack and ES6](http://krasimirtsonev.com/blog/article/javascript-library-starter-using-webpack-es6)

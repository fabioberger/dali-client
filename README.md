Dali
------------------------------------

# Front-end Dev Setup

`npm install webpack -g`

`npm install webpack-dev-server -g`

`npm install`

# Start Dev Server

`webpack-dev-server --content-base public --watch`

# Running Tests

## Run All Tests

`webpack --target node; mocha built/bundle.js`

## Run a Specific Test

`cd ./tests`
`webpack ./redux/thunks/items_thunks.test.js --target node; mocha built/bundle.js`

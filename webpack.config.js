var webpack = require("webpack");
var path = require('path');

module.exports = {
    entry: ['babel-polyfill', './public/js/entry.js'],
    output: {
        path: path.join(__dirname, '/public/built'),
        filename: 'bundle.js',
    },
    resolve: {
        root: [path.join(__dirname, '/public/js')],
        extensions: ['', '.js', '.jsx']
    },
    module: {
        preLoaders: [
            {test: /\.js$/, loader: "eslint-loader", exclude: /node_modules/}
        ],
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ["es2015", "stage-2", "react"],
                }
            },
            {
                test: /\.less$/,
                loader: 'style!css!less'
            },
        ],
    },
};

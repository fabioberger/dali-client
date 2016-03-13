var webpack = require("webpack");
var path = require('path');

module.exports = {
    entry: ['babel-polyfill', path.join(__dirname, '/entry.js')],
    output: {
        path: path.join(__dirname, '/built'),
        filename: 'bundle.js',
    },
    resolve: {
        root: [path.join(__dirname, '/../public/js'), path.join(__dirname)],
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ["es2015", "stage-2", "react"],
                }
            },
            { test: /\.json$/, loader: 'json'},
        ],
    },
    plugins: [
        // Workaround to getting fetch to work with webpack
        new webpack.ProvidePlugin({
            'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch',
        }),
        // This line suppresses a warning related to the `encoding` node_module
        new webpack.NormalModuleReplacementPlugin(/\/iconv-loader$/, 'node-noop')
    ]
};

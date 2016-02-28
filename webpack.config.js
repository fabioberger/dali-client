var path = require('path');

module.exports = {
    entry: './public/js/entry.js',
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    output: {
        path: path.join(__dirname, '/public/built'),
        filename: 'bundle.js',
    },
    module: {
        loaders: [
            {
                test: /\.less$/,
                loader: 'style!css!less'
            },
            {
                test: /\.jsx?$/,
                loaders: ['babel'],
                include: path.join(__dirname, '/public/js'),
            }
        ]
    }
};

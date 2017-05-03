const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    devtool: "cheap-module-eval-source-map",
    target: "web",
    output: {
        publicPath: '/public',
        filename: 'afrika.bundle.js',
        path: path.resolve(__dirname, 'dev')
    },
    module: {
        // configuration regarding modules

        rules: [
            // rules for modules (configure loaders, parser options, etc.)

            {
                test: /\.jsx?$/,
                include: [
                    path.resolve(__dirname, "src")
                ],
                exclude: /node_modules/,

                loader: "babel-loader",

                query: {
                    presets: [
                        'es2015',
                        'react'
                    ]
                },
            },
            {
                test: /\.js$/,
                include: [
                    path.resolve(__dirname, "src")
                ],
                exclude: /node_modules/,

                loader: 'babel-loader',

                query: {
                    presets: [
                        'es2015',
                        'react'
                    ]
                },
            },
            {
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            }
        ],

    },
    resolve: {
        // options for resolving module requests

        modules: [
            "node_modules",
        ],

        extensions: ["*", ".js", ".json", ".jsx", ".css"]
    }
};
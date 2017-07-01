const webpack = require('webpack');
const WebpackBrowserPlugin = require('webpack-browser-plugin');
const path = require('path');

module.exports = {
    entry: './app/main.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                loader: 'eslint',
                exclude: /node_modules/
            }
        ],
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    },
    devServer: {
        contentBase: "./build",
        hot: true,
        inline: true,
        lazy: false,
        port: 9000
    },
    plugins: process.env.NODE_ENV === 'production'? [] : [
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false
                },
                output: {
                    comments: false
                }
            }),
            new webpack.HotModuleReplacementPlugin(),
            new WebpackBrowserPlugin({
                browser: 'Chrome',
                port: 9000,
                url: 'http://127.0.0.1'
            })
        ]
};
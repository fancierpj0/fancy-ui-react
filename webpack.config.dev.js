const base = require('./webpack.config');
const {smart} = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports =smart(base, {
    mode: 'development'

    , plugins: [
        new HtmlWebpackPlugin({
            template: "index.html"
            , title: 'fancy-ui-react'
        })
    ]
});

const base = require('./webpack.config');
const {smart} = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports =smart(base, {
    mode: 'development'
    ,entry:{
        example:'./example.tsx'
    }
    , plugins: [
        new HtmlWebpackPlugin({
            template: "example.html"
            , title: 'fancy-ui-react'
        })
    ]
});

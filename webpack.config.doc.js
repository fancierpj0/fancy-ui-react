const base = require('./webpack.config');
const {smart} = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

//注意smart，是不会替换之前的entry、plugins什么的，而是如果base里已经设置了entry和plugins的话它会往里面追加
//这可能导致与你的预期不符
module.exports = smart(base, {
    mode: 'production'

    , entry: {
        example:'./example.tsx'
    }

    , output: {
        path: path.resolve(__dirname, 'doc')
    }

    , plugins: [
        new HtmlWebpackPlugin({
            template: "example.html"
            ,filename: 'index.html'
        })
    ]
});

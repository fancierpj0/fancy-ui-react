const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    }

    , entry: {
        index: './lib/index.tsx'
    }

    , output: {
        path: path.resolve(__dirname, 'dist') // 用resolve能解决路径分隔符在windows上是\其它是/的问题
        , library: 'fancy-ui-react'
        , libraryTarget: 'umd' // commonJS amd umd(兼容前两种)
    }

    , module: {
        rules: [
            {
                test: /\.tsx?$/
                , loader: 'awesome-typescript-loader'
            }
        ]
    }

    , plugins: [

    ]
};

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    }

    , output: {
        path: path.resolve(__dirname, 'dist/lib') // 用resolve能解决路径分隔符在windows上是\其它是/的问题
        , library: 'fancy-ui-react'
        , libraryTarget: 'umd' // commonJS amd umd(兼容前两种)
    }

    , module: {
        rules: [
            {
                test: /\.tsx?$/
                , loader: 'awesome-typescript-loader'
            }
            ,{
                test:/\.svg$/
                ,loader:'svg-sprite-loader'
            }
            ,{
                test:/\.s[ac]ss$/
                ,use:[
                    'style-loader'
                    ,'css-loader'
                    ,{
                        loader:'sass-loader'
                    }
                ]
            }
            ,{
                test:/\.(png|jpg|gif)$/
                // ,use:'file-loader'
                ,use:{
                    loader:'url-loader'
                    , options: {
                        //base64大小会比源文件大1/3左右
                        // limit:200*1024 //大于的会使用file-loader打包成真正的图片
                        limit:1
                        // , publicPath: "http://localhost:3000"
                        //设置生成图片的目录
                        // ,outputPath:'/img/'
                    }
                }
            }
        ]
    }

    , plugins: [

    ]
};

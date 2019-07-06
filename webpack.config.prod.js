const base = require('./webpack.config');
const {smart} = require('webpack-merge');

module.exports = smart(base, {
    mode: 'production'

    //↓只有在mode为production时才会生效
    , externals: {
        react: {
            commonjs: 'react' // const React = require('react') 这里指定的就是require时候引入的这个'react'
            , commonjs2: 'react'
            , amd: 'react'
            , root: 'React' // <script src="xxx/react.min.js"> window.React = {}
        }
        , 'react-dom': {
            commonjs: 'react-dom'
            , commonjs2: 'react-dom'
            , amd: 'react-dom'
            , root: 'ReactDOM'
        }
    }

});

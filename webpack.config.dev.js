const webpack = require('webpack');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpackBase = require('./webpack.config.base')
const webpackMerge = require('webpack-merge');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports =webpackMerge(webpackBase,{
    // context: __dirname + '/build',
    performance: {//不弹出合并的js超出大小弹出警告错误
        hints: false
      },
    devServer: {  //开发环境中的热启动
        contentBase:path.join(__dirname,'./build'),//网站的根目录为 根目录/build，如果配置不对，会报Cannot GET /错误
        historyApiFallback: true,
        hot: true,
        compress: true,
        open:true,
        host: 'localhost',
        port: 8080,        
        proxy: {
            '/zjl_test': {
                target: 'http://linux.fushoukeji.com/maqiapi',
                changeOrigin: true,
                pathRewrite: {
                    '^/zjl_test': ''
                }
            }
        },
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000,
            ignored: /node_modules/
        }
    },
    plugins: [
        // new HtmlWebpackPlugin,
        // new ExtractTextPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
})  
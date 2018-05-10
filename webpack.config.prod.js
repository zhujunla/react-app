const webpack = require('webpack');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpackBase = require('./webpack.config.base')
const webpackMerge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');//清理打包文件


module.exports =webpackMerge(webpackBase,{
    // context: __dirname + '/build',
    plugins: [
         new CleanWebpackPlugin(['build']),
    ]
})  
const webpack = require('webpack');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpackBase = require('./webpack.config.base')
const webpackMerge = require('webpack-merge');

module.exports =webpackMerge(webpackBase,{
    // context: __dirname + '/build',
         
    
})  
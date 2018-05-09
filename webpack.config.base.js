const webpack = require('webpack');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    // context: __dirname + '/build',
    entry: "./src/app.js",
    output: {
        path: __dirname + '/build/',
        filename: "bundle.js"
    },
    devtool: 'none',//打包方式
    resolve: {
        enforceExtension: false,
        extensions: [".js", ".jsx"],
        alias: {
            utils: path.resolve(__dirname, 'src/utils/'),
            containers: path.resolve(__dirname, 'src/containers/')
        }
    },
    module: {
        rules: [{
            test: /\.js|jsx$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                plugins: ['transform-runtime'],
                presets: ['es2015', 'react', 'stage-2']
            }
        }, 
        // {
        //     test: /\.less|css$/,
        //     use: [
        //         'style-loader',
        //         { loader: "css-loader",options: { 
        //             importLoaders: 1,
        //             modules:true,
        //             localIdentName:'[name]__[local]-[hash:base64:5]'                
        //         }},
        //          'less-loader'          
        //     ]
        // }
        {
            test: /\.less|css$/,
            loader:ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: [
                    
                    { loader: "css-loader",options: { 
                        importLoaders: 1,
                        modules:true,
                        localIdentName:'[name]__[local]-[hash:base64:5]'                
                    }},
                    'less-loader'          
                ]
            })
            
        }
    ]
    },
    plugins: [
        new ExtractTextPlugin("styles.css"),
      ] 
}
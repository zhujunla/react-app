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
            test: /\.(css|less)$/,
            include: path.join(__dirname, 'node_modules'),
            loader:ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: [
                    "css-loader",                   
                    {
                        loader:'less-loader' ,
                        options:{
                            javascriptEnabled:true
                        }
                    }         
                ]
            })
        /**
         * 主项目的css合并到style.css
         */
        },
        {
            test: /\.less|css$/, 
            include: path.join(__dirname, 'src'),          
            loader:ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: [
                    { loader: "css-loader",options: { 
                        importLoaders: 1,
                        modules:true,                                          
                        localIdentName:'[name]__[local]-[hash:base64:5]'                
                        // localIdentName:'[local]'                
                    }},                   
                    {
                        loader:'less-loader' ,
                        options:{
                            javascriptEnabled:true
                        }
                    }         
                ]
            })
            
        }
    ]
    },
    plugins: [
        new ExtractTextPlugin("styles.css"),
      ] 
}
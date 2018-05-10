const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


const STATIC_PATH = 'static';
module.exports = {
    // context: __dirname + '/build',
    entry: "./src/app.js",
    output: {
        // path: __dirname + '/build/',
        path: path.resolve("build"),
        filename: `${STATIC_PATH}/js/bundle.js`,
        publicPath: "/"
    },
    devtool: 'inline-source-map',//报错能回到源文件位置
    resolve: {
        enforceExtension: false,
        extensions: [".js", ".jsx"],
        alias: {
            utils: path.resolve(__dirname, 'src/utils/'),
            containers: path.resolve(__dirname, 'src/containers/'),
            src: path.resolve(__dirname, 'src'),

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
        // 
        {

            test: /\.(gif|png|jpe?g|svg|icon|ico)$/i,
            loader: 'url-loader',
            options: {
                limit:10000,
                name:`${STATIC_PATH}/images/[hash:8].[name].[ext]`
                // publicPath:`${STATIC_PATH}/image/styles.css`
            },
        },

        {
            test: /\.(css|less)$/,
            include: path.join(__dirname, 'node_modules'),
            loader: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: [
                    "css-loader",
                    {
                        loader: 'less-loader',
                        options: {
                            javascriptEnabled: true
                        }
                    }
                ]
            })
        },
        {
            test: /\.less|css$/,
            include: path.join(__dirname, 'src'),
            loader: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: [
                    {
                        loader: "css-loader", options: {
                            importLoaders: 1,
                            modules: true,
                            localIdentName: '[name]__[local]-[hash:base64:8]',
                            // url:false
                            // localIdentName:'[local]'                
                        }
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            javascriptEnabled: true
                        }
                    }
                ]
            })

        }
        ]
    },
    plugins: [
        new ExtractTextPlugin(`${STATIC_PATH}/css/styles.css`),
        new HtmlWebpackPlugin({
            title: 'react—app',
            template: './public/index.html',
            favicon: 'src/images/bitbug_favicon.ico',
            hash: true
          })
    ]
}
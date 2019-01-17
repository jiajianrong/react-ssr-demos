const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');


const FILES = {
    JS: path.join( __dirname, '../src/App.js' ),
    BUILD: path.join( __dirname, '../build' ),
    SRC: path.join( __dirname, '../src' ),
    HTML: path.join( __dirname, '../public/index.html' ),
};


module.exports = {
    
    bail: true,
    entry: {
        index: FILES.JS,
    },
    output: {
        filename: 'static/[name].[chunkhash:8].js',
        chunkFilename: 'static/[name].[chunkhash:8].js',
        publicPath: '',
        path: FILES.BUILD,
    },
    
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            include: FILES.SRC,
            loader: require.resolve('babel-loader'),
        },
        ]
    },
    
    
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: FILES.HTML,
        }),
        
        /*new ExtractTextPlugin({
            filename: 'static/page-index/[name].[contenthash:8].css',
        }),*/
    ]

};
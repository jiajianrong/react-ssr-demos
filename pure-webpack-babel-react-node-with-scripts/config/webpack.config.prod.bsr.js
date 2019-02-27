const webpack = require('webpack');
const nodeExternals = require("webpack-node-externals");
const HtmlWebpackPlugin = require('html-webpack-plugin');
//const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');


const FILES = {
    JS: path.join( __dirname, '../src/AppBSR.js' ),
    BUILD: path.join( __dirname, '../src' ),
    SRC: path.join( __dirname, '../src' ),
    HTML: path.join( __dirname, '../public/index.html' ),
};


module.exports = {
    
    bail: true,
    /*target: 'node',
    node: {
        __dirname: false,
    },
    externals: [nodeExternals()],*/
    entry: {
        index: FILES.JS,
    },
    output: {
        //libraryTarget: 'commonjs2',
        filename: 'AppBSR.es5.js',
        chunkFilename: '[name].es5.js',
        //publicPath: 'https://cdn.abc.com/',
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
        /*new HtmlWebpackPlugin({
            inject: true,
            template: FILES.HTML,
        }),*/
        
        /*new ExtractTextPlugin({
            filename: 'static/page-index/[name].[contenthash:8].css',
        }),*/
    ]

};
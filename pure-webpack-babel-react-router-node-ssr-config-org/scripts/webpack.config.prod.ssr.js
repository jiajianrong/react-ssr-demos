const webpack = require('webpack');
const nodeExternals = require("webpack-node-externals");
//const HtmlWebpackPlugin = require('html-webpack-plugin');
//const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');


const FILES = {
    JS: path.join( __dirname, '../mw-ssr.js' ),
    BUILD: path.join( __dirname, '../' ),
    SRC: path.join( __dirname, '../react/src' ),
    HTML: path.join( __dirname, '../react/public/index.html' ),
};


module.exports = {
    
    bail: true,
    target: 'node',
    externals: [nodeExternals()],
    entry: {
        ['mw-ssr-es5']: FILES.JS,
    },
    output: {
        libraryTarget: 'commonjs2',
        filename: '[name].js',
        chunkFilename: '[name].js',
        path: FILES.BUILD,
    },
    
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            include: [ FILES.JS, FILES.SRC ],
            loader: require.resolve('babel-loader'),
        },
        ]
    },
    
    
    plugins: [
        /*new HtmlWebpackPlugin({
            inject: true,
            template: FILES.HTML,
        }),
        
        new ExtractTextPlugin({
            filename: 'static/page-index/[name].[contenthash:8].css',
        }),*/
       
        /*new webpack.optimize.CommonsChunkPlugin({
          name: 'vendor'
        }),
        new webpack.optimize.CommonsChunkPlugin({
          name: 'runtime'
        }),*/
       
        
    ]

};
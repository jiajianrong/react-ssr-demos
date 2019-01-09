const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
//const paths = require('./paths');

const FILES = {
    JS: path.join( __dirname, '../src/App.js' ),
    BUILD: path.join( __dirname, '../build' ),
    SRC: path.join( __dirname, '../src' ),
    HTML: path.join( __dirname, '../public/index.html' ),
};


module.exports = {
    devtool: 'cheap-module-source-map',
    entry: {
        index: FILES.JS,
    },
    output: {
        filename: '[name].js',
        chunkFilename: '[name].chunk.js',
        path: FILES.BUILD,
    },
    
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            include: FILES.SRC,
            loader: require.resolve('babel-loader'),
        },
        /*{
            test: /\.css$/,
            loader: 'style-loader!css-loader',
        },
        // "url" loader works just like "file" loader but it also embeds
        // assets smaller than specified size as data URLs to avoid requests.
        {
            test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
            loader: require.resolve('url-loader'),
            options: {
                limit: 10000,
                name: 'static/page-index/[name].[hash:8].[ext]',
            }
        },
        {
            test: /\.ejs$/,
            //loader: 'ejs-loader?variable=data'
            loader: 'html-loader!ejs-loader?variable=data'
        }*/]
    },
    
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: FILES.HTML,
        }),
        //new webpack.HotModuleReplacementPlugin(),
    ]


};
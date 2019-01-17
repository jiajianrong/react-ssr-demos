const webpack = require('webpack');
const { ReactLoadablePlugin } = require('react-loadable/webpack');
const path = require('path');


const FILES = {
    JS: path.join( __dirname, '../src/AppBSR.js' ),
    BUILD: path.join( __dirname, '../build' ),
    SRC: path.join( __dirname, '../src' ),
    LOADABLE_JSON: path.join( __dirname, '../build/react-loadable.json' ),
};


module.exports = {
    
    bail: true,
    entry: {
        index: FILES.JS,
    },
    output: {
        filename: 'static/[name].js',
        chunkFilename: 'static/[name].js',
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
       
        /*new webpack.optimize.CommonsChunkPlugin({
          name: 'vendor'
        }),*/
        new webpack.optimize.CommonsChunkPlugin({
          name: 'runtime'
        }),
        
        new ReactLoadablePlugin({ filename: FILES.LOADABLE_JSON }),
    ]

};
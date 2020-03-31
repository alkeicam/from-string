'use strict';

var nodeExternals = require('webpack-node-externals');
const path = require('path');

module.exports = {
    entry: './src/index.js',
    mode: 'production',
    output: {
        filename: 'aihub.js', // <-- Important
        path: path.resolve(__dirname, 'dist'),
        // ,
        // libraryTarget: 'this' // <-- Important
        library: 'fromstring',
        libraryTarget: 'umd',
        globalObject: 'this'
    },
    resolve: {
        extensions: [ '.js' ]
    },
    

    externals: [nodeExternals({})] // <-- Important
};

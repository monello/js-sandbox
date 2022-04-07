const path = require('path');

// Use the webpack merge() function that will allow us to merge together multiple webpack configs.
const { merge } = require('webpack-merge');

// Pull in the Common Webpack config, in order to merge it with this Development config
const commonConfig = require('./webpack.common');

const prodConfig = {
    mode: 'production',                // This will be where you state the environment this config is intended for: 'development', `production` or 'none'
    entry: './src/index.js',    // Webpack will use this as you application entry point from where to start building up it's depencenct tree
    output: {
        filename: 'bundle.[contenthash].js',  // Here we tell WP what to call out bundled JS file
        path: path.resolve(__dirname, 'dist'), // Here we tell WP where to place the file. WP will create this dir-structure if it does not yet exist. The path MUST be an absolute-path, so we can use the Node package "path", to help generate it
        publicPath: ''
    },
    // output: {
    //     publicPath: 'http://localhost:5500/'
    // },
    devServer: {            // This is where you hook-up Webpack to the webpack-dev-server package
        port: 8000,
        static: {           // Tells Webpack and webpack-dev-server, where the folder with the files are to serve
            directory: path.resolve(__dirname, 'dist') // The same as above in the output property-
        },
        devMiddleware: {
            index: 'index.html',        // Tell the dev server which HTML file to use when serving th app
            writeToDisk: false           // By default Webpack writes bundles to memory while in development mode (dist folder would be empty), Setting it to true will write the files to dist
        }
    },
};

module.exports = merge(commonConfig, prodConfig);

const path = require('path');

// Use the webpack merge() function that will allow us to merge together multiple webpack configs.
const { merge } = require('webpack-merge');

// Pull in the Common Webpack config, in order to merge it with this Development config
const commonConfig = require('./webpack.common');

const prodConfig = {
    mode: 'development',                // This will be where you state the environment this config is intended for: 'development', `production` or 'none'
    output: {
        publicPath: 'http://localhost:8000/'
    },
    devServer: {                        // This is where you hook-up Webpack to the webpack-dev-server package
        port: 8000,
        static: {                       // Tells Webpack and webpack-dev-server, where the folder with the files are to serve
            directory: path.resolve(__dirname, 'dist')
        },
        devMiddleware: {
            index: 'index.html',        // Tell the dev server which HTML file to use when serving the app
            writeToDisk: false          // By default Webpack writes bundles to memory while in development mode (dist folder would be empty), Setting it to true will write the files to dist
        }
    },
};

module.exports = merge(commonConfig, prodConfig);

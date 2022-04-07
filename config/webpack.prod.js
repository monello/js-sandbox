// Use the webpack merge() function that will allow us to merge together multiple webpack configs.
const { merge } = require('webpack-merge');

// Pull in the Common Webpack config, in order to merge it with this Production config
const commonConfig = require('./webpack.common');

const devConfig = {
    mode: 'production',                // This will be where you state the environment this config is intended for: 'development', `production` or 'none'
    output: {
        filename: 'bundle.[contenthash].js',  // Here we tell WP what to call out bundled JS file
        publicPath: ''
    },
};

module.exports = merge(commonConfig, devConfig);

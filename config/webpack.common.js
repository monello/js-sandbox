const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');              // Handles bundle minification
const { CleanWebpackPlugin } = require('clean-webpack-plugin');     // Cleans out the dist folder sand rebuilds it each time

module.exports = {
    mode: 'none',                // This will be where you state the environment this config is intended for: 'development', `production` or 'none'
    plugins: [
        new TerserPlugin(),
        new CleanWebpackPlugin(),        // This plugin will delete everything inside the file we specify above in the "output" section of the config, before it re-builds the app
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
};

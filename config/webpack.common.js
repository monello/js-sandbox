const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');              // Handles bundle minification
const { CleanWebpackPlugin } = require('clean-webpack-plugin');     // Cleans out the dist folder sand rebuilds it each time

module.exports = {
    entry: './src/index.js',                    // Webpack will use this as you application entry point from where to start building up it's depencenct tree
    plugins: [
        new TerserPlugin(),                     // minifies the bundled files
        new CleanWebpackPlugin(),               // This plugin will delete everything inside the file we specify above in the "output" section of the config, before it re-builds the app
        new HtmlWebpackPlugin({
            filename: 'index.html',             // What to call the file
            template: './assets/template.html', // Where to find the file
            title: 'Logical Operators x'
        })
    ]
};

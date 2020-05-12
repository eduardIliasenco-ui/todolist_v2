require('dotenv').config();
const path =  require('path');
const extract = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
<<<<<<< HEAD
    entry: './src/index.js',
=======
    entry: path.resolve(__dirname, 'src/index.js'),
>>>>>>> 47749626a4b6a3bee81e9ca2c9bd7d3905822f31
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
<<<<<<< HEAD

=======
    resolve: {
        modules: [
            path.resolve(__dirname, 'node_modules'),
            path.resolve(__dirname, './src'),
        ]
    },
>>>>>>> 47749626a4b6a3bee81e9ca2c9bd7d3905822f31
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
<<<<<<< HEAD
                        presets: ['@babel/preset-env']
=======
                        presets: [
                            '@babel/preset-env',
                            {
                                'plugins': [
                                    "@babel/plugin-proposal-class-properties"
                                ]
                            }
                        ]
>>>>>>> 47749626a4b6a3bee81e9ca2c9bd7d3905822f31
                    }
                }
            },
            {
                test:/\.(sa|sc|c)ss$/,
                use: [
                    {
                        loader: extract.loader
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: require('sass')
                        }
                    },
                ]
            },
        ]
    },
    plugins: [
        new extract({
            filename: 'bundle.css'
        }),
<<<<<<< HEAD
        new HtmlWebpackPlugin(),
=======
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.html'),
        }),
>>>>>>> 47749626a4b6a3bee81e9ca2c9bd7d3905822f31
        new CleanWebpackPlugin({ cleanStaleWebpackAssets: false })
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    },
    devtool: 'inline-source-map',
    mode: 'development'
};
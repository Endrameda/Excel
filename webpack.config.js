const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: './index.js',
    output: {
        filename: 'bundle.[hash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    resolve: {
        extensions: ['.js'],
        alias: {
            '@src': path.resolve(__dirname, 'src'),
            '@core': path.resolve(__dirname, 'src/core')
        }
    },
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
            inject: 'body'
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/assets'),
                    to: path.resolve(__dirname, 'dist/assets')
                }
            ]
        }),
        new MiniCssExtractPlugin({
            filename: 'bundle.[hash].css'
        })
    ],
}

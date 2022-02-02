const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';
const isDev = !isProd;
const dirName = __dirname;

const filename = (ext) => (isDev ? `bundle.${ext}` : `bundle.[hash].${ext}`);
const pathResolve = (directory, pathSrc) => path.resolve(directory, pathSrc);

module.exports = {
  context: pathResolve(dirName, 'src'),
  mode: 'development',
  entry: ['@babel/polyfill', './index.ts'],
  output: {
    filename: filename('js'),
    path: pathResolve(dirName, 'dist'),
    clean: true,
  },
  devtool: isDev ? 'source-map' : false,
  devServer: {
    port: 8080,
    hot: isDev,
  },
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      '@src': pathResolve(dirName, 'src'),
      '@core': pathResolve(dirName, 'src/core'),
    },
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
        test: /\.ts$|js/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              presets: ['@babel/preset-env'],
            },
          },
          'ts-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      inject: 'body',
      minify: {
        removeComments: isProd,
        collapseWhitespace: isProd,
      },
    }),
    new CopyPlugin({
      patterns: [
        {
          from: pathResolve(dirName, 'src/assets'),
          to: pathResolve(dirName, 'dist/assets'),
        },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: filename('css'),
    }),
    new ESLintPlugin(),
  ],
};

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProd = process.env.NODE_ENV === 'production';
const isDev = !isProd;
const dirName = __dirname;

const filename = (ext) => (isDev ? `bundle.${ext}` : `bundle.[hash].${ext}`);
const pathResolve = (directory, pathSrc) => path.resolve(directory, pathSrc);

const jsLoaders = () => {
  const loaders = [
    {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
      },
    },
  ];

  if (isDev) {
    loaders.push('eslint-loader');
  }
};

module.exports = {
  context: pathResolve(dirName, 'src'),
  mode: 'development',
  entry: ['@babel/polyfill', './index.js'],
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
    extensions: ['.js'],
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
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: jsLoaders(),
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
  ],
};

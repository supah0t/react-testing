const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'bundle.[hash].js',
    publicPath: '/',
  },
  mode: 'development',
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap:true
            }
          },
        ]
      },
    ],
  },
  devServer: {
    static: './public',
    historyApiFallback: true,
    open: true,
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({template: './src/index.html'}),
    new ReactRefreshWebpackPlugin(),
  ]

};

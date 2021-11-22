const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'bundle.[fullhash].js',
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
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(jpg|png|ttf)$/,
        use: {
          loader: 'url-loader',
        }
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
              //modules: true,
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
    //proxy: {'/api': 'http://localhost:3000/'},
  },
  plugins: [
    new HtmlWebpackPlugin({template: './src/index.html'}),
    new ReactRefreshWebpackPlugin(),
  ]

};

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'static/bundle.[fullhash].js',
    publicPath: '/'
  },
  mode: 'production',
  //Is this usefull??
  devtool: 'source-map',
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
              modules: true,
            }
          },
        ]
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({template: './src/index.html'}),
  ]
};

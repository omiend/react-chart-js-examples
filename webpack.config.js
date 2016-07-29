var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    index: './src/index.js'
  },
  output: {
    path: path.join(__dirname, 'public/scripts'),
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react'],
        }
      }
    ]
  },
  resolve: {
    extensions: ['', '.json', '.js', '.jsx'],
    modulesDirectories: ['node_modules', __dirname]
  }
};

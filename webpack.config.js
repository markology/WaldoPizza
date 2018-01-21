const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: path.resolve(__dirname, './src/components'),
  entry: {
    app: './index.js'
  },
  target: 'node',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'stage-0']
        }
      },
      {test: /\.json$/, loader: 'json-loader'}
    ]
  },
  plugins: [
    // new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"',
      global: {}, // bizarre lodash(?) webpack workaround
      'global.GENTLY': false // superagent client fix
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ],
  resolve: {
    alias: {
      '@@modules': path.join(__dirname, '/src/components/modules'),
      '@@pages': path.join(__dirname, '/src/components/pages'),
      '@@actions': path.join(__dirname, '/src/redux/actions'),
      '@@redux': path.join(__dirname, '/src/redux'),
    }
  },
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    dns: 'empty'
  }
};

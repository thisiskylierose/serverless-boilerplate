var path = require('path');

module.exports = {
  target: 'node',
  entry: [
    'babel-regenerator-runtime',
    path.join(__dirname, 'src/handler.js'),
  ],
  output: {
    filename: 'handler.js',
    library: 'handler',
    libraryTarget: 'commonjs2',
    path: path.join(__dirname, 'dist'),
  },
  resolve: {
    modules: [
      'node_modules',
      path.join(process.cwd(), 'src'),
    ],
    extensions: ['.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
    ],
  },
};

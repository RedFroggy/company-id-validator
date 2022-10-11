const path = require('path');

module.exports = {
  entry: './lib.js',
  resolve: {
    extensions: ['.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist/demo'),
  },
};

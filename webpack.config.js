const path = require('path');

module.exports = {
  entry: './src/targaryen.js',
  target: 'node',
  mode: 'development',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};

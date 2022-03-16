const path = require('path');
const DemoPlugin = require('/Users/cocoon/99-projects/webpack-plugin-boilerplate/dist/cjs');

module.exports = {
  entry: './src/targaryen.js',
  target: 'node',
  mode: 'development',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new DemoPlugin({}),
  ],
};

const path = require('path');

module.exports = {
  target: 'node',
  entry: {
    "index": "./index.ts",
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '.'),
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  stats: {
    warnings: false,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      }
    ]
  },
  plugins: [
  ]
}
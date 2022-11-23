
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  target: 'web',
  entry: {
    "test-report-tab/index": "./src/test-report-tab/index.tsx",
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      "azure-devops-extension-sdk": path.resolve("node_modules/azure-devops-extension-sdk")
    },
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
      },
      {
          test: /\.scss$/,
          use: ["style-loader", "css-loader", "azure-devops-ui/buildScripts/css-variables-loader", "sass-loader"]
      },
      {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
      },
      {
          test: /\.woff$/,
          use: [{
              loader: 'base64-inline-loader'
          }]
      },
      {
          test: /\.html$/,
          loader: "file-loader"
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: '**/*.html', context: 'src' },
      ],
    }),
  ]
}
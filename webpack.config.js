const path = require('path');

const PATHS = {
  theme: path.join(__dirname, 'src/index.js'),
  build: 'dist',
};

module.exports = {
  entry: PATHS.theme,
  output: {
    path: path.join(__dirname, PATHS.build),
    filename: 'index.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'eslint-loader',
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/,
        enforce: 'pre',
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader?cacheDirectory=true',
      },
      { test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/, use: 'url-loader?name=images/[name].[hash].[ext]&limit=32' },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};

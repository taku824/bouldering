const path = require('path');

module.exports = {
  entry: './app/javascript/application.js',
  output: {
    filename: 'application.js',
    path: path.resolve(__dirname, 'app/assets/builds'),
    publicPath: '/assets/'
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'app/assets/builds'),
    },
    compress: true,
    port: 3035,
    host: '0.0.0.0',
    hot: true,
    liveReload: true,
    watchFiles: ['app/javascript/**/*', 'app/views/**/*'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};

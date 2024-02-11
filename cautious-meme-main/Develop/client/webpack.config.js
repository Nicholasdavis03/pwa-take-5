const HtmlWebpackPlugin = require('html-webpack-plugin');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');

module.exports = {
  // Other webpack configuration options...

  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    new WorkboxWebpackPlugin.GenerateSW({
      // Configurations for caching static assets and enabling offline support
    }),
    new WebpackPwaManifest({
      name: 'Your Application Name',
      short_name: 'App',
      description: 'Description of your application',
      background_color: '#ffffff',
      theme_color: '#ffffff',
      icons: [
        // Array of icon configurations
      ]
    })
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime']
          }
        }
      }
    ]
  }
};

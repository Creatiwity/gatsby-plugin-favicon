const webpack = require(`webpack`);
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

exports.modifyWebpackConfig = ({ config }) =>
  config.plugin(`Favicon`, FaviconsWebpackPlugin, [
    {
      logo: './src/favicon.png',
      prefix: 'favicons/'
    }
  ])

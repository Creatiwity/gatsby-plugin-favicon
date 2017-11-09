const webpack = require(`webpack`)
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

exports.modifyWebpackConfig = ({ config, stage }, { logo, icons }) =>
  config.plugin(`Favicon`, FaviconsWebpackPlugin, [
    {
      logo: logo || './src/favicon.png',
      prefix: 'favicons/',
      icons: Object.assign(
        {},
        {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: true,
          favicons: true,
          firefox: true,
          twitter: true,
          yandex: true,
          windows: true,
        },
        icons
      ),
    },
  ])

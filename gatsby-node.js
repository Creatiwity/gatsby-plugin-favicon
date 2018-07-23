const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports.onCreateWebpackConfig = ({ actions, stage }, { logo, icons = {}, title, background }) => {
  if (stage === 'develop-html' || stage === 'build-html') {
    actions.setWebpackConfig({
      plugins: [
        new FaviconsWebpackPlugin({
          logo: logo || './src/favicon.png',
          title,
          background: background || '#fff',
          inject: false,
          emitStats: true,
          statsFilename: '.iconstats.json',
          icons: {
            android: true,
            appleIcon: true,
            appleStartup: true,
            coast: true,
            favicons: true,
            yandex: true,
            windows: true,
            ...icons,
          }
        }),
      ]
    })
  }
}

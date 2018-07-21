import FaviconsWebpackPlugin from 'favicons-webpack-plugin'

exports.onCreateWebpackConfig = ({ actions, stage }, { logo, icons = {}, title, background }) => {
  if (stage === 'develop-html' || stage === 'build-html') {
    actions.setWebpackConfig({
      plugins: [
        new FaviconsWebpackPlugin({
          logo: logo || './src/favicon.png',
          prefix: 'favicons/',
          title,
          background: background || '#fff',
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

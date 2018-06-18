import FaviconsWebpackPlugin from 'favicons-webpack-plugin'

exports.onCreateWebpackConfig = ({ actions, stage }, { logo, icons = {} }) => {
  if (stage === 'develop-html' || stage === 'build-html') {
    actions.setWebpackConfig({
      plugins: [
        new FaviconsWebpackPlugin({
          logo: logo || './src/favicon.png',
          prefix: 'favicons/',
          icons: {
            android: true,
            appleIcon: true,
            appleStartup: true,
            coast: true,
            favicons: true,
            firefox: true,
            twitter: true,
            yandex: true,
            windows: true,
            ...icons,
          }
        }),
      ]
    })
  }
}


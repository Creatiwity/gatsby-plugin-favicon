const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports.onCreateWebpackConfig = ({ actions, stage }, { logo, icons = {}, title, background }) => {
  if (stage === 'develop-html' || stage === 'build-html') {
    const prefix = __PATH_PREFIX__ ? __PATH_PREFIX__ : '';

    actions.setWebpackConfig({
      plugins: [
        new FaviconsWebpackPlugin({
          logo: logo || './src/favicon.png',
          title,
          background: background || '#fff',
          inject: false,
          emitStats: true,
          statsFilename: '.iconstats.json',
          publicPath: prefix,
          icons: {
            android: true,
            appleIcon: true,
            appleStartup: true,
            coast: false,
            favicons: true,
            firefox: true,
            opengraph: false,
            twitter: false,
            yandex: false,
            windows: false,
            ...icons,
          },
        }),
      ],
    });
  }
};

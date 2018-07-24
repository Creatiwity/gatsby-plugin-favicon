const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports.onCreateWebpackConfig = ({
  actions,
  stage,
  getConfig
}, {
  logo,
  icons = {},
  title,
  appName,
  appDescription,
  developerName,
  developerURL,
  dir,
  lang,
  background,
  theme_color,
  display,
  orientation,
  start_url,
  version
}) => {
  if (stage === 'develop-html' || stage === 'build-html') {
    actions.setWebpackConfig({
      plugins: [
        new FaviconsWebpackPlugin({
          logo: logo || './src/favicon.png',
          emitStats: true,
          statsFilename: '.iconstats.json',
          persistentCache: true,
          inject: false,

          appName: appName || title,
          appDescription: appDescription,
          developerName: developerName,
          developerURL: developerURL,
          dir: dir || 'auto',
          lang: lang || 'en-US',
          background: background || '#fff',
          theme_color: theme_color || '#fff',
          display: display || 'standalone',
          orientation: orientation || 'any',
          start_url: start_url || '/?homescreen=1',
          version: version || '1.0',

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

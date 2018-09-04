const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const merge = require('lodash/merge');

const defaultOptions = {
  logo: './src/favicon.png',
  emitStats: true,
  statsFilename: '.iconstats.json',
  persistentCache: true,
  inject: false,

  appName: null,
  appDescription: null,
  developerName: null,
  developerURL: null,
  dir: 'auto',
  lang: 'en-US',
  background: '#fff',
  theme_color: '#fff',
  display: 'standalone',
  orientation: 'any',
  start_url: '/?homescreen=1',
  version: '1.0',

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
  },
};

function isHtmlStage(stage) {
  return stage === 'develop-html' || stage === 'build-html';
}

function getOptions(options) {
  let finalOptions = {};
  merge(finalOptions, defaultOptions, options);
  return finalOptions;
}

module.exports.onCreateWebpackConfig = ({ actions, stage }, options) => {
  if (isHtmlStage(stage)) {
    actions.setWebpackConfig({
      plugins: [
        new FaviconsWebpackPlugin(getOptions(options)),
      ],
    });
  }
};

'use strict'

var _react = require('react')

var _react2 = _interopRequireDefault(_react)

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

exports.onRenderBody = function(_ref) {
  var setHeadComponents = _ref.setHeadComponents

  var _ref2 =
      arguments.length > 1 && arguments[1] !== undefined
        ? arguments[1]
        : pluginOptions,
    _ref2$android = _ref2.android,
    android = _ref2$android === undefined ? true : _ref2$android,
    _ref2$appleIcon = _ref2.appleIcon,
    appleIcon = _ref2$appleIcon === undefined ? true : _ref2$appleIcon,
    _ref2$appleStartup = _ref2.appleStartup,
    appleStartup = _ref2$appleStartup === undefined ? true : _ref2$appleStartup,
    _ref2$coast = _ref2.coast,
    coast = _ref2$coast === undefined ? true : _ref2$coast,
    _ref2$favicons = _ref2.favicons,
    favicons = _ref2$favicons === undefined ? true : _ref2$favicons,
    _ref2$firefox = _ref2.firefox,
    firefox = _ref2$firefox === undefined ? true : _ref2$firefox,
    _ref2$twitter = _ref2.twitter,
    twitter = _ref2$twitter === undefined ? true : _ref2$twitter,
    _ref2$yandex = _ref2.yandex,
    yandex = _ref2$yandex === undefined ? true : _ref2$yandex,
    _ref2$windows = _ref2.windows,
    windows = _ref2$windows === undefined ? true : _ref2$windows

  var prefix = typeof __PATH_PREFIX__ !== 'undefined' ? __PATH_PREFIX__ : ''
  var HeadComponents = []

  if (android) {
    HeadComponents.push(
      _react2.default.createElement('link', {
        rel: 'manifest',
        href: prefix + '/favicons/manifest.json',
        key: 'favicon_' + (HeadComponents.length + 1),
      })
    )
  }
  if (appleIcon) {
    HeadComponents.push(
      _react2.default.createElement('link', {
        rel: 'apple-touch-icon',
        sizes: '57x57',
        href: prefix + '/favicons/apple-touch-icon-57x57.png',
        key: 'favicon_' + (HeadComponents.length + 1),
      }),
      _react2.default.createElement('link', {
        rel: 'apple-touch-icon',
        sizes: '60x60',
        href: prefix + '/favicons/apple-touch-icon-60x60.png',
        key: 'favicon_' + (HeadComponents.length + 2),
      }),
      _react2.default.createElement('link', {
        rel: 'apple-touch-icon',
        sizes: '72x72',
        href: prefix + '/favicons/apple-touch-icon-72x72.png',
        key: 'favicon_' + (HeadComponents.length + 3),
      }),
      _react2.default.createElement('link', {
        rel: 'apple-touch-icon',
        sizes: '76x76',
        href: prefix + '/favicons/apple-touch-icon-76x76.png',
        key: 'favicon_' + (HeadComponents.length + 4),
      }),
      _react2.default.createElement('link', {
        rel: 'apple-touch-icon',
        sizes: '114x114',
        href: prefix + '/favicons/apple-touch-icon-114x114.png',
        key: 'favicon_' + (HeadComponents.length + 5),
      }),
      _react2.default.createElement('link', {
        rel: 'apple-touch-icon',
        sizes: '120x120',
        href: prefix + '/favicons/apple-touch-icon-120x120.png',
        key: 'favicon_' + (HeadComponents.length + 6),
      }),
      _react2.default.createElement('link', {
        rel: 'apple-touch-icon',
        sizes: '144x144',
        href: prefix + '/favicons/apple-touch-icon-144x144.png',
        key: 'favicon_' + (HeadComponents.length + 7),
      }),
      _react2.default.createElement('link', {
        rel: 'apple-touch-icon',
        sizes: '152x152',
        href: prefix + '/favicons/apple-touch-icon-152x152.png',
        key: 'favicon_' + (HeadComponents.length + 8),
      }),
      _react2.default.createElement('link', {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: prefix + '/favicons/apple-touch-icon-180x180.png',
        key: 'favicon_' + (HeadComponents.length + 9),
      })
    )
  }
  if (appleStartup) {
    HeadComponents.push(
      _react2.default.createElement('link', {
        rel: 'apple-touch-startup-image',
        media:
          '(device-width: 320px) and (device-height: 480px) and (-webkit-device-pixel-ratio: 1)',
        href: prefix + '/favicons/apple-touch-startup-image-320x460.png',
        key: 'favicon_' + (HeadComponents.length + 1),
      }),
      _react2.default.createElement('link', {
        rel: 'apple-touch-startup-image',
        media:
          '(device-width: 320px) and (device-height: 480px) and (-webkit-device-pixel-ratio: 2)',
        href: prefix + '/favicons/apple-touch-startup-image-640x920.png',
        key: 'favicon_' + (HeadComponents.length + 2),
      }),
      _react2.default.createElement('link', {
        rel: 'apple-touch-startup-image',
        media:
          '(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)',
        href: prefix + '/favicons/apple-touch-startup-image-640x1096.png',
        key: 'favicon_' + (HeadComponents.length + 3),
      }),
      _react2.default.createElement('link', {
        rel: 'apple-touch-startup-image',
        media:
          '(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)',
        href: prefix + '/favicons/apple-touch-startup-image-750x1294.png',
        key: 'favicon_' + (HeadComponents.length + 4),
      }),
      _react2.default.createElement('link', {
        rel: 'apple-touch-startup-image',
        media:
          '(device-width: 414px) and (device-height: 736px) and (orientation: landscape) and (-webkit-device-pixel-ratio: 3)',
        href: prefix + '/favicons/apple-touch-startup-image-1182x2208.png',
        key: 'favicon_' + (HeadComponents.length + 5),
      }),
      _react2.default.createElement('link', {
        rel: 'apple-touch-startup-image',
        media:
          '(device-width: 414px) and (device-height: 736px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 3)',
        href: prefix + '/favicons/apple-touch-startup-image-1242x2148.png',
        key: 'favicon_' + (HeadComponents.length + 6),
      }),
      _react2.default.createElement('link', {
        rel: 'apple-touch-startup-image',
        media:
          '(device-width: 768px) and (device-height: 1024px) and (orientation: landscape) and (-webkit-device-pixel-ratio: 1)',
        href: prefix + '/favicons/apple-touch-startup-image-748x1024.png',
        key: 'favicon_' + (HeadComponents.length + 7),
      }),
      _react2.default.createElement('link', {
        rel: 'apple-touch-startup-image',
        media:
          '(device-width: 768px) and (device-height: 1024px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 1)',
        href: prefix + '/favicons/apple-touch-startup-image-768x1004.png',
        key: 'favicon_' + (HeadComponents.length + 8),
      }),
      _react2.default.createElement('link', {
        rel: 'apple-touch-startup-image',
        media:
          '(device-width: 768px) and (device-height: 1024px) and (orientation: landscape) and (-webkit-device-pixel-ratio: 2)',
        href: prefix + '/favicons/apple-touch-startup-image-1496x2048.png',
        key: 'favicon_' + (HeadComponents.length + 9),
      }),
      _react2.default.createElement('link', {
        rel: 'apple-touch-startup-image',
        media:
          '(device-width: 768px) and (device-height: 1024px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 2)',
        href: prefix + '/favicons/apple-touch-startup-image-1536x2008.png',
        key: 'favicon_' + (HeadComponents.length + 10),
      })
    )
  }
  if (favicons) {
    HeadComponents.push(
      _react2.default.createElement('link', {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: prefix + '/favicons/favicon-32x32.png',
        key: 'favicon_' + (HeadComponents.length + 1),
      }),
      _react2.default.createElement('link', {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: prefix + '/favicons/favicon-16x16.png',
        key: 'favicon_' + (HeadComponents.length + 2),
      }),
      _react2.default.createElement('link', {
        rel: 'shortcut icon',
        href: prefix + '/favicons/favicon.ico',
        key: 'favicon_' + (HeadComponents.length + 3),
      })
    )
  }
  if (coast) {
    HeadComponents.push(
      _react2.default.createElement('link', {
        rel: 'icon',
        type: 'image/png',
        sizes: '228x228',
        href: prefix + '/favicons/coast-228x228.png',
        key: 'favicon_' + (HeadComponents.length + 1),
      })
    )
  }
  if (windows) {
    HeadComponents.push(
      _react2.default.createElement('meta', {
        name: 'msapplication-TileImage',
        content: prefix + '/favicons/mstile-144x144.png',
        key: 'favicon_' + (HeadComponents.length + 1),
      }),
      _react2.default.createElement('meta', {
        name: 'msapplication-config',
        content: prefix + '/favicons/browserconfig.xml',
        key: 'favicon_' + (HeadComponents.length + 2),
      })
    )
  }
  if (yandex) {
    HeadComponents.push(
      _react2.default.createElement('link', {
        rel: 'yandex-tableau-widget',
        href: prefix + '/favicons/yandex-browser-manifest.json',
        key: 'favicon_' + (HeadComponents.length + 1),
      })
    )
  }
  setHeadComponents(HeadComponents)
}

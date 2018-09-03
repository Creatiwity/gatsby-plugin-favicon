# gatsby-plugin-favicon

Generates all favicons for Web, Android, iOS, ...

## Install

`yarn add gatsby-plugin-favicon`

or

`npm install --save gatsby-plugin-favicon`

## How to use

1. Include the plugin in your `gatsby-config.js` file.
2. Add a `favicon.png` file in your `src` folder. The recommended size for the
   file is: 1500x1500px.

```javascript
// in gatsby-config.js
plugins: [
  `gatsby-plugin-favicon`
];
```

## Options

Here is a full list of options with their default values you can use to configure this plugin.

```javascript
// in gatsby-config.js
plugins: [
  {
    resolve: `gatsby-plugin-favicon`,
    options: {
      logo: "./src/favicon.png",

      // WebApp Manifest Configuration
      appName: null, // Inferred with your package.json
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
        windows: false
      }
    }
  }
];
```

## Gatsby v1 Workaround

Starting from the version 2.1.3, this plugin is almost compatible again with Gatsby v1. But the first build always fail. That's why it's only considered as a workaround, until someone find a way to fix it, or until everyone upgrade Gatsby to v2.

More precisely, Gatsby produces the cache file used by this plugin a little bit too late. When you build it again, it will be already there.

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
        yandex: false,
        windows: false
      }
    }
  }
];
```

## Gatsby v1

Starting from v3, this plugin is not compatible anymore with Gatsby v1, you should stick to the version 2.1.1 of this plugin with Gatsby v1.

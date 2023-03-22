const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

//Adds and configures workbox plugins for a service worker and manifest file.

module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      /*generates HTML file that will include all webpack bundles using script tags a
      will also set the title of the page to 'Contact Cards'*/
      new HtmlWebpackPlugin({
        template: './index.html',
        title: 'Contact Cards'
      }),

      //creates InjectManifest object.
    //used to configure how service worker is generated/injected into app
      new InjectManifest({
        swSrc: './src-sw.js',
        swDest: 'src-sw.js',
      }),
//makes json tgat orivudes info about app
      new WebpackPwaManifest({
        fingerprints: false,
        inject: true,
        name: 'Text Editor',
        short_name: 'TE',
        description: 'Another Text Editor',
        background_color: '#225ca3',
        theme_color: '#225ca3',
        start_url: './',
        publicPath: './',
        icons: [
          {
            /* icon that will be used for app, has diff sizes. 
            The destination for this icon will be in the assets/icons folder*/
            src: path.resolve('src/images/logo.png'),
            sizes: [96, 128, 192, 256, 384, 512],
            destination: path.join('assets', 'icons'),
          },
        ],
      }),
    ],

    module: {
      rules: [
        
      ],
    },
  };
};

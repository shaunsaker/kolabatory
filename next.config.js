const withSASS = require('@zeit/next-sass');
const withImages = require('next-images');
const withFonts = require('next-fonts');
const compose = require('next-compose');

const fontsConfig = {};
const imagesConfig = {};
const sassConfig = { cssModules: true };

module.exports = compose([
  [withFonts, fontsConfig],
  [withImages, imagesConfig],
  [withSASS, sassConfig],
  {
    webpack: (config) => {
      return config;
    },
  },
]);

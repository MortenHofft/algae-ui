// const path = require('path');
// const webpack = require('webpack');

module.exports = ({ config, mode }) => {
  
  config.module.rules.push({
    test: /\.stories\.js?$/,
    loaders: [require.resolve('@storybook/addon-storysource/loader')],
    enforce: 'pre',
  });

  return config;
};

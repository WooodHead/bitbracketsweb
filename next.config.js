// const { parsed: localEnv } = require('dotenv').config();
const localEnv = require('./env.config');
// const webpack = require('webpack');

module.exports = {
  webpack: (config, { dev }) => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    };
    console.log('env', localEnv);
    console.log('API URL', process.env.API_URL);

    // config.plugins.push(new webpack.EnvironmentPlugin(localEnv));

    // Perform customizations to config
    config.module.rules = config.module.rules.map(rule => {
      if (rule.loader === 'babel-loader') {
        rule.options.cacheDirectory = false;
      }
      return rule;
    });

    return config;
  }
};

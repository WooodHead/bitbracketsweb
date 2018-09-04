const { parsed: localEnv, error } = require('dotenv').config();
const webpack = require('webpack');

if (error) {
  throw error;
}

module.exports = {
  webpack: (config, { dev }) => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    };

    console.log('env', localEnv);

    config.plugins.push(new webpack.EnvironmentPlugin(localEnv));

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

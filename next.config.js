module.exports = {
  webpack: (config, { dev }) => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty',
    };

    // Perform customizations to config
    config.module.rules = config.module.rules.map((rule) => {
      if (rule.loader === 'babel-loader') {
        rule.options.cacheDirectory = false;
      }
      return rule;
    });

    return config;
  },
};


const path = require('path');

module.exports = {
  stories: ['../stories/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    'storybook-addon-designs',
  ],
  webpackFinal: async (config) => {
    config.resolve.alias = {
      '@': path.resolve(__dirname, '../src'),
    };
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../src')
    })
    return config;
  },
};

const { alias } = require('react-app-rewire-alias');

const aliasMapping = {
  '@components': 'src/components',
  '@styles': 'src/styles',
  '@pages': 'src/pages',
  '@assets': 'public',
};

module.exports = function override(config) {
  alias(aliasMapping)(config);
  return config;
};

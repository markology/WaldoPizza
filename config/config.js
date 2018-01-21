const path = require('path');

const rootPath = path.normalize(path.join(__dirname, '/..'));
const env = process.env.NODE_ENV || 'development';

const config = {
  development: {
    root: rootPath,
    app: {
      name: 'Waldo Pizza'
    },
    port: 3000
  }
};

module.exports = config[env];

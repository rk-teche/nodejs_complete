const path = require('path');

module.exports = {
  development: {
    sitename: 'Roux Meetups [Development]',
    serviceRegistryURL: 'http://localhost:3000',
    serviceVersionIdentifier: '1.x.x',
    data: {
      feedback: path.join(__dirname, '../data/feedback.json'),
    },
  },
  production: {
    sitename: 'Roux Meetups',
    serviceRegistryURL: 'http://localhost:3000',
    serviceVersionIdentifier: '1.x.x',
    data: {
      feedback: path.join(__dirname, '../data/feedback.json'),
    },
  },
};

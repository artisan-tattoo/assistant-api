const path = require('path');

module.exports = {
  development: {
    client: 'pg',
    debug: true,
    connection: 'postgres:///artisan',
    directory: path.resolve(__dirname, '../migrations'),
    migrations: {
      tableName: 'migrations'
    }
  }
};

const path = require('path');

module.exports = {
  development: {
    client: 'sqlite3',
    debug: true,
    connection: {
      filename: 'test.db'
    },
    directory: '../migrations',
    migrations: {
      tableName: 'migrations'
    }
  }
}


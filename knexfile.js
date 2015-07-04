const path = require('path');

module.exports = {
  development: {
    client: 'sqlite3',
    debug: true,
    connection: {
      filename: 'dev.db'
    },
    pool: {
      afterCreate: function (conn, cb) {
        conn.run('PRAGMA foreign_keys = ON', cb);
      }
    }
  },
  production: {
    client: 'pg',
    debug: false,
    connection: 'postgres:///artisan',
    directory: path.resolve(__dirname, '../migrations'),
    migrations: {
      tableName: 'migrations'
    }
  }
};

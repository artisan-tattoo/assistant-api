const DB = require('../src/classes/database');
const config = require('./knexfile');
const store = require('./fixtures/stores').user;

module.exports = {
  reset: function () {
    return DB.knex.migrate.rollback(config).then(function () {
      return DB.knex.migrate.latest(config);
    });
  },
  addUser: function() {
    DB.knex('stores').insert(store);
  }
}

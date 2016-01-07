const DB = require('../src/classes/database');
const config = require('../knexfile');
const store = require('./fixtures/stores').user;
const artist = require('./fixtures/artists').mock_resource;

module.exports = {
  reset: function () {
    DB.knex.schema.dropTable('customers');
    DB.knex.schema.dropTable('artists');
    DB.knex.schema.dropTable('stores');
    return DB.knex.migrate.latest(config).then(function(){
      return DB.knex('stores').insert(store).then(function(){
        return DB.knex('artists').insert(artist);
      });
    });
  }
}

exports.up = function (knex) {
  return knex.schema
    .createTable('stores', function (t) {
      t.increments('id');
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTable('stores');
};

exports.up = function (knex) {
  return knex.schema
    .createTable('stores', function (t) {
      t.increments('id');
      t.string('name').notNullable();
      t.string('email').notNullable();
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTable('stores');
};

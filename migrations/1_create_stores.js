exports.up = function (knex) {
  return knex.schema
    .createTable('stores', function (t) {
      t.increments('id');
      t.string('name').nonNullable();
      t.string('email').nonNullable();
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTable('stores');
};

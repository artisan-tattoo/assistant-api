exports.up = function (knex) {
  return knex.schema
    .createTable('artists', function(t) {
      t.increments('id');
      t.integer('store-id').notNullable().references('id').inTable('stores');
      t.string('name').notNullable();
      t.string('email').notNullable();
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTable('artists');
};

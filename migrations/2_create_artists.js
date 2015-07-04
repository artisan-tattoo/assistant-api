exports.up = function (knex) {
  return knex.schema
    .createTable('artists', function(t) {
      t.increments('id');
      t.integer('store_id').notNullable().references('id').inTable('stores');
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTable('artists');
};

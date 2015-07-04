exports.up = function (knex) {
  return knex.schema
    .createTable('customers', function(t) {
      t.increments('id');
      t.integer('artist_id').notNullable().references('id').inTable('artists');
    });
};

exports.down = function (knex) {
  return knex.schmea
    .dropTable('customers');
};

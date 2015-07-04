exports.up = function (knex) {
  return knex.schema
    .createTable('appointments', function (t) {
      t.increments('id');
      t.integer('artist_id').notNullable().references('id').inTable('artists');
      t.integer('customer_id').notNullable().references('id').inTable('customers');
      t.dateTime('date_scheduled').notNullable();
      t.text('description');
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTable('appointments');
};

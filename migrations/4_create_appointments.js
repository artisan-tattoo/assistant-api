exports.up = function (knex) {
  return knex.schema
    .createTable('appointments', function (t) {
      t.increments('id');
      t.integer('artist-id').notNullable().references('id').inTable('artists');
      t.integer('customer-id').notNullable().references('id').inTable('customers');
      t.dateTime('date-scheduled').notNullable();
      t.text('description');
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTable('appointments');
};

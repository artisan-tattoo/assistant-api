exports.up = function (knex) {
  return knex.schema
    .createTable('customers', function(t) {
      t.increments('id');
      t.integer('artist_id').notNullable().references('id').inTable('artists');
      t.string('name').notNullable();
      t.string('phone').notNullable();
      t.string('email');
      t.dateTime('dateonwaitinglist');
      t.integer('status');
      t.boolean('local');
      t.string('location');
      t.string('credit');
      t.text('want');
      t.text('notes');
    });
};

exports.down = function (knex) {
  return knex.schmea
    .dropTable('customers');
};

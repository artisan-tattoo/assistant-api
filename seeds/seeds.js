const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);
const pass_hash = bcrypt.hashSync("password", salt);

exports.seed = function(knex, Promise) {
  return Promise.join(

    knex('stores').del(),
    knex('stores').insert({
      id: 1,
      name: "Artisan Tattoo",
      email: "artisan@example.com",
      password_hash: pass_hash
    }),

    knex('artists').del(),
    knex('artists').insert({
      id: 1,
      store_id: 1,
      name: "Jason Angst",
      email: "jason@example.com",
    }),

    knex('customers').del(),
    knex('customers').insert({
      artist_id: 1,
      name: "Steve",
      phone: "412 555 5555",
      email: "steve@example.com",
      dateonwaitinglist: new Date(),
      status: 1,
      local: false,
      location: "Brooklyn",
      credit: "infinite",
      want: "Sweet sleeves",
      notes: "basically the best",
    }),

    knex('appointments').del(),
    knex('appointments').insert({
      id: 1,
      artist_id: 1,
      customer_id: 1,
      date_scheduled: new Date(),
      description: "finish off that sleeve",
    })
  );
};

const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);
const pass_hash = bcrypt.hashSync("password", salt);

exports.seed = function(knex, Promise) {
  return Promise.join(
    knex('stores').insert({
      name: "Artisan Tattoo",
      email: "artisan@example.com",
      password_hash: pass_hash
    })
  );
};

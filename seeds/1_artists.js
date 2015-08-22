exports.seed = function(knex, Promise) {
  return Promise.join(
    knex('artists').insert({
      "store-id": 1,
      name: "Jason Angst",
      email: "jason@example.com",
    })
  );
};

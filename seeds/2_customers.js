exports.seed = function(knex, Promise) {
  return Promise.join(
    knex('customers').insert({
      artist_id: 1,
      name: "Steve",
      phone: "412 555 5555",
      email: "steve@example.com",
      "date-on-waiting-list": new Date(),
      status: 1,
      local: false,
      location: "Brooklyn",
      credit: "infinite",
      want: "Sweet sleeves",
      notes: "basically the best",
    })
  );
};

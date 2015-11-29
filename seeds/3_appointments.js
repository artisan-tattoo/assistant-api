exports.seed = function(knex, Promise) {
  return Promise.join(
    knex('appointments').insert({
      "artist-id": 1,
      customer_id: 1,
      "date-scheduled": new Date(),
      description: "finish off that sleeve",
    })
  );
};

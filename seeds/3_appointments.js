exports.seed = function(knex, Promise) {
  return Promise.join(
    knex('appointments').insert({
      artist_id: 1,
      customer_id: 1,
      date_scheduled: new Date(),
      description: "finish off that sleeve",
    })
  );
};

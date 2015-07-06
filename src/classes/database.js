const config = require('../../knexfile')[process.env.NODE_ENV || "development"];

const Knex = require('knex')(config);
const Bookshelf = require('bookshelf')(Knex);

module.exports = Bookshelf;

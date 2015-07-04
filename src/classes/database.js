const config = require('../../knexfile')['development'];

const Knex = require('knex')(config);
const Bookshelf = require('bookshelf')(Knex);

module.exports = Bookshelf;


const knex = require('knex')({
  client: 'pg',
  connection: {
    host     : '127.0.0.1',
    user     : 'postgres',
    password : 'postgres',
    database : 'bootstrap',
    charset  : 'utf8'
  }
});

const bookshelf = require('bookshelf')(knex);

module.exports = bookshelf;

require('./user');

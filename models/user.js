var bookShelf = require('./index');

var User = bookShelf.Model.extend({
		tableName: 'user'
});

module.exports = User;
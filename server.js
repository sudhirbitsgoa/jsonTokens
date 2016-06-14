const express = require('express');
const app = new express();
const bodyParser = require('body-parser');
const passport = require('passport');

app.use(bodyParser.json()); // for parsing application/json

/*
 * load error consts
*/
const errorHandler = require('./errors');

/*
 * load all the models
*/
require('./models');

/*
 * load all the routes
*/
require('./routes')(app);

app.use((err, res) => {
	console.log(err);
});

app.listen(3000, () => {
	console.log('server started on http://localhost:3000');
});

module.exports = app;
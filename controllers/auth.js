var express = require('express')
var UserModel = require('../models/user')
var jwt = require('json-web-token');
var moment = require('moment')


module.exports.verifypassword = function(req, res) {

	const username = req.body.username;
	const password = req.body.password;

	UserModel.where({ username: username }).fetch().then(function(user) {
		const userDetails = user.toJSON();
		if (password === userDetails.password) {
			delete(userDetails.password);
			const expires = moment().add(7, 'days').valueOf()
			jwt.encode('jwtTokenSecret', {
				iss: 123456,
				exp: expires
			}, function (err, token) {
				res.json({
					token : token,
					expires : expires,
					user : userDetails
				});
			});
		} else {
			res.status(401).send('Unauthorized');
		}
	}).catch(function (err) {
		res.send(err);
	});
}
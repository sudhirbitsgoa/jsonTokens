const express = require('express')
const UserModel = require('../models/user');
const jwt = require('json-web-token');
const moment = require('moment');
const hashUtil = require('../util/hashUtil');

module.exports.verifypassword = function(req, res) {

    const username = req.body.username;
    const password = req.body.password;

    UserModel.where({
        username: username
    }).fetch().then(function(user) {
        const userDetails = user.toJSON();
        hashUtil.compareStringToHash(password, userDetails.password, function(err, match) {
            console.log('passwords matched', err, match);
						if(!match) {
							return res.status(401).send('Unauthorized');
						}
            delete(userDetails.password);
            const expires = moment().add(7, 'days').valueOf()
            jwt.encode('jwtTokenSecret', {
                iss: 123456,
                exp: expires
            }, function(err, token) {
                res.json({
                    token: token,
                    expires: expires,
                    user: userDetails
                });
            });
        });
    }).catch(function(err) {
        res.send(err);
    });
}

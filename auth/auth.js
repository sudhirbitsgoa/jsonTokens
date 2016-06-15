var jwt = require('json-web-token');

/**
 * jwtauth
 *
 *  A simple middleware for parsing a JWt token attached to the request. If the token is valid, the corresponding user
 *  will be attached to the request.
 */

const UserModel = require('../models/user');

module.exports = function(req, res, next) {

    var token = req.headers["x-mystq-token"];
    if (token) {
        try {
            jwt.decode('jwtTokenSecret', token, function(err, decoded) {
                console.log(err, decoded);
                if (err) {
                    return res.send(err);
                }
                if (decoded.exp <= Date.now()) {
                    res.end('Access token has expired', 400);
                } else {
                    next();
                }
            });
            /*UserModel.findOne({ '_id': decoded.iss }, function(err, user){

            	if (!err) {
            		req.user = user
            		return next()
            	}
            })*/
        } catch (err) {
            res.status(401).send('Unauthorized');
        }

    } else {
        res.send('error');
    }
}

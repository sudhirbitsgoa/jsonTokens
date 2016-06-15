const bcrypt = require('bcrypt');
const saltRounds = 10;
/*
 * salt gets pre appended to the hash
 */
const genHash = function(plainString, cb) {
    bcrypt.genSalt(saltRounds, function(err, salt) {
        bcrypt.hash(plainString, salt, function(err, hash) {
            if (err) {
                return cb(err);
            }
            cb(null, hash);
        });
    });
}

module.exports.genHash = genHash;
module.exports.compareStringToHash = bcrypt.compare;

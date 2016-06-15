const bcrypt = require('bcrypt');
const saltRounds = 10;
const plainPassword = 'sudhir';

bcrypt.genSalt(saltRounds, function(err, salt) {
    console.log('salt', salt);
    bcrypt.hash('sudhir', salt, function(err, hash) {
        console.log('hash of sudhir is ', hash);
        bcrypt.compare('sudhir', hash, function(err, res) {
            console.log('comparable res', res);
        });
    });
});

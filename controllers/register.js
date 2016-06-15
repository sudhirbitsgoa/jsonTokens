const UserModel = require('../models/user');
const hashUtil  = require('../util/hashUtil');

module.exports = function(req, res, next) {

  const username = req.body.username;
  const password = req.body.password;

  /*
  * need to add express param validator
  */
  UserModel.where({ username: username }).fetch().then(function(user) {
    if(!user || user.length < 1) {

      hashUtil.genHash(password, function(err, hash) {
        const newUser = new UserModel({
          username: username,
          password: hash
        });
        newUser.save().then(function(user) {
          res.status(200).send(user.toJSON());
        }, function(err) {
          console.log(err);
        })
      });
    } else {
      res.status(400).send('User already exists');
    }
  });
}

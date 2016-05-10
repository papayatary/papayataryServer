var User = require('../models/user.js');
var Match = require('../models/match.js');

module.exports.saveOne = function (req, res) {
  var userData = {
    email: req.body.email,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    facebookId: req.body.facebookId,
  };
  User
    // this should be facebookId, right? otherwise we get dupes if any other field isn't identical
    .findOrCreate({ where: userData })
    .spread(function (user) {
      res.status(201).json(user.dataValues);
    });
};

module.exports.fetchOne = function (req, res) {
  res.status(200).end();
};

module.exports.fetchAll = function (req, res) {
  res.status(200).end();
};

// If a refresh token is saved to the database the user is authorized
module.exports.isAuthed = function (req, res) {
  var facebookId = req.body.facebookId;
  User.findOne({ where: { facebookId: facebookId } })
    .then(function (user) {
      if (user && user.get('fitbitToken')) {
        res.status(201).json(true);
      } else {
        res.status(201).json(false);
      }
    });
};

module.exports.serveUsers = function (req, res) {
  var facebookId = req.body.facebookId;
  var gender = req.body.gender;
  User.findOne({ where: { facebookId: facebookId } }).then(function (user) {
    var userId = user.get('id');
      Match.findAll({
        where: { likerUserId : userId },
        attributes: ['likedUserId', 'matchedIds'],
      }).then(function (likedMatches) {
        Match.findAll({
          where: { likedUserId: userId },
          attributes: ['likerUserId', 'matchedIds'],
        }).then(function (likerMatches) {
          console.log(likedMatches);
          console.log(likerMatches);
          var matchedIds = [1, 2, 3, 4, 5];
          User.findAll({
            where: { Id: { $notIn: matchedIds } },
            attributes: ['id','firstName'],
          }).then(function (userData) {             
          });
        });
      });
  });
};


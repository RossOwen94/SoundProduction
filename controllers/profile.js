var mongoose = require('mongoose');
var User = require('../models/users');

module.exports.profileRead = function(req, res) {

  // If no user ID exists in the JWT return a 401
  if (!req.payload._id) {
    res.status(401).json({
      "message" : "UnauthorizedError: private profile"
    });
  } else {
    // Otherwise continue
    //This will return the JSON user object
    //It could contain a token that verifies purchased scores(score token)
    //The client could send the token to the backend to get back a list of 
    User
      .findById(req.payload._id)
      .exec(function(err, user) {
        res.status(200).json(user);
      });
  }

};
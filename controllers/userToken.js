var mongoose = require('mongoose');
var User = require('../models/users');
var Transaction = require('../models/transaction');



module.exports.returnUserToken = function(req, res) {

    User.findById(req.payload._id).exec(function(err,user){
        var newUserToken = user.generateJwt();
    
        res.json({
          "token" : newUserToken
        });
    });
};
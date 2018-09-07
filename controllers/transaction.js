var mongoose = require('mongoose');
var User = require('../models/users');
var Transaction = require('../models/transaction');
var userToken = require('../controllers/userToken');

module.exports.newTransaction = function(req, res) {

  
  // If no user ID exists in the JWT return a 401
  if (!req.payload._id) {
    res.status(401).json({
      "message" : "UnauthorizedError: You are not logged in"
    });
  } else {
    // Otherwise continue
    //This will return the JSON user object
    //It could contain a token that verifies purchased scores(score token)
    //The client could send the token to the backend to get back a list of 
    User
      .findById(req.payload._id)
      .exec(function(err, user) {
  
            var transaction = new Transaction();
            transaction.name = req.body.transactionData.name;
            transaction.setDates();
            transaction.email = user.email
            transaction.paypalEmail= req.body.transactionData.email;
      
            for(let i=0;i<req.body.transactionData.items.length;i++){

              transaction.items[i]=req.body.transactionData.items[i].name;
            }
       
            transaction.total= req.body.transactionData.total;
            transaction.transactionId=req.body.transactionData.saleId;
            
            var purchaseToken = transaction.generateJwt(req);
            

              User.findByIdAndUpdate({_id:req.payload._id}, { $push: { purchases: purchaseToken }}, { new: true }, function (err, user) {
                if (err)
                 return err;
                 userToken.returnUserToken(req,res);
              });
           
            transaction.save(function(err) {
              if(err)
                return err;
            });      
      });  
  }
};


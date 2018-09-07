var crypto = require('crypto');
var jwt = require('jsonwebtoken');
var mongoose = require('mongoose');
var transactionSchema = require('./transaction');

var transactionSchema = new mongoose.Schema({
    date: Date,     //I generate this, not provided
    name: String,   //Comes from transactionData
    email: String,            //Comes from user JWT 
    paypalEmail: String,
    items: [String],
    total: Number,            //Price of the order
    transactionId: String,
    exp: Date          
  });

    
  transactionSchema.methods.setDates = function(){
    var newExp = new Date();
    this.date=newExp;
    newExp.setDate(newExp.getDate() + 365);
    this.exp=newExp;
    return ;
  };

 

  transactionSchema.methods.generateJwt = function(req) {
    var expiry = new Date();
    expiry.setDate(expiry.getDate() + 365);
  
    return jwt.sign({
      _id: req.payload._id,
      email: this.email,
      name: this.name,
      scores: this.items, //Needs to be array of strings, key is name
      exp: parseInt(expiry.getTime() / 1000),
    }, process.env.SECRET); 

    
  };


  var Transaction = mongoose.model('Transaction',transactionSchema);
  module.exports = Transaction;
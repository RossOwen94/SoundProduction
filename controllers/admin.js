var mongoose = require('mongoose');
var sample = require('../models/sample');
var Transaction = require('../models/transaction')
var User = require('../models/users');

module.exports.addScore = function(req,res,err){

    var scoreData = req.body.scoreData;
    var newScore = new sample();

    newScore.name = scoreData.name;
    newScore.soundCloud=scoreData.soundcloud;
    newScore.difficulty=scoreData.difficulty;
    newScore.instrumentation=scoreData.instrumentation.split(',');
    newScore.longDesc=scoreData.longDesc;
    newScore.description=scoreData.shortDesc;
    newScore.price=scoreData.price;

    newScore.save(function(err){
        if(err)
            res.send(err);
        else{
            res.status(200);
        }
            
    });
}

module.exports.listTransactions = function(req,res,err){
    Transaction.find({},(err,docs)=>{
        if(!err){res.send(docs);}
        else{ console.log('Error in retrieving Transactions :' + JSON.stringify(err,undefined,2)); }
       });
}

module.exports.listUsers = function(req,res,err){
    User.find({},(err,docs)=>{
        if(!err){res.send(docs);}
        else{ console.log('Error in retrieving Users :' + JSON.stringify(err,undefined,2)); }
       });
}

module.exports.updateScore = function(req,res,err){
    sample.findOneAndUpdate({name: req.body.scoreName}, {$set:{soundCloud:req.body.scoreData.soundcloud,difficulty:req.body.scoreData.difficulty,instrumentation: req.body.scoreData.instrumentation,description:req.body.scoreData.shortDesc,longDesc:req.body.scoreData.longDesc,price:req.body.scoreData.price}}, {new: true}, function(err, doc){
        if(err){
            console.log("Something wrong when updating data!");
        }
        console.log(doc);
        res.json(doc);
    });
}

module.exports.removeScore = function(req,res,err){
    sample.findOneAndDelete({name: req.body.scoreName}, function(err){
        if(err){
            console.log("Something wrong when updating data!");
            res.status(400);
            res.end();
        }
        
        res.status(200);
        res.end();
    });
}
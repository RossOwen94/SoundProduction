var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var Sample = require('../models/sample.js');


router.get('/list',function(req,res,next){
       Sample.find({},(err,docs)=>{
        if(!err){res.send(docs);}
        else{ console.log('Error in retrieving Samples :' + JSON.stringify(err,undefined,2)); }
       });
  });

module.exports = router;
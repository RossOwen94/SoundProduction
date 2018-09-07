var mongoose = require('mongoose');
var User = require('../models/users');
var jwt = require('jsonwebtoken');
var atob = require('atob');

module.exports.buildURLs = function(req, res) {

  // If no user ID exists in the JWT return a 401
  if (!req.payload._id) {
    res.status(401).json({
      "message" : "UnauthorizedError: private profile"
    });
  } else {
    //Loop through the tokens in the scores field of the payload
    var urls = [String];
    var payload,decodedToken,token;
    var i,j,k=0;
    var dateNow = new Date();
    var baseUrl = 'https://gideonsystems.net/download/serve?id=';
    for(i=0;i<req.payload.purchases.length;i++){
        //Decode Token
        token=req.payload.purchases[i];
        payload=token.split('.')[1];
        payload=atob(payload);
        decodedToken=JSON.parse(payload);
        //Check if token is expired
        if((decodedToken.exp * 1000) > dateNow.getTime()){
            //Not Expired, add  each URL to urls
            for( j=0;j<decodedToken.scores.length;j++){
                //Add current scores name to base url string and add to array
                var nextScore = decodedToken.scores[j];
                urls[k]= baseUrl + `${nextScore}`;
                k++;
            }

        }else{
            //Expired, do something?
            
        }

    }
   
    res.send({verifiedURLs: urls});
    //Respond to front end with the array of URLs
  }

};

module.exports.serveFile= function(req,res){
    var scoreURL = req.query.id;
   
    for(let i =0;i<req.payload.purchases.length;i++){
        token = req.payload.purchases[i];
        payload=token.split('.')[1];
        payload=atob(payload);
        
        tokenObject = JSON.parse(payload);
       
        for(let j=0;j<tokenObject.scores.length;j++){
           
            if(tokenObject.scores[j]==scoreURL){
                var path = `${scoreURL}`+`.pdf`;
                res.download(path);
                return ;
            }
        }
        
    }
   
};
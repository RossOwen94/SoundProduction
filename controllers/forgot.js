var mongoose = require('mongoose');
var User = require('../models/users');
var jwt = require('jsonwebtoken');
var nodemailer = require('nodemailer');
var ejs = require('ejs');
var fs = require('fs');
var path= require ('path');
var atob = require('atob');
var crypto = require('crypto');



module.exports.sendRecovery = function(req,res,err){
   
    console.log(req.body);
    User.find({email: req.body.email}).exec(function(err,docs){
           
            if(!docs.length){
                console.log('not found');
                 res.sendStatus(204);
                 res.end();
            }
    });//No user has the specified email
        
        //Else
        //Send the email

        var baseUrl='http://gideonsystems.net/forgot/reset?token=';
        var newDate = new Date();
        console.log(newDate.toDateString());
        console.log(newDate.getMinutes());
        newDate.setTime(newDate.getTime() + 5*60000);
        console.log(newDate.toDateString());
        console.log(newDate.getMinutes());

        var resetToken = jwt.sign({
            email:req.body.email,
            exp: parseInt(newDate.getTime() / 1000),
        }, process.env.SECRET);

        console.log(resetToken);
        var resetUrl = `${baseUrl}`+`${resetToken}`;
        console.log(resetUrl);
        var emailCss = {
            style: fs.readFileSync(path.resolve(__dirname, "../views/resetStyles.css"),'utf8')
        };



       ejs.renderFile('./views/resetEmail.ejs',{resetlink: resetUrl, myCss: emailCss},function(err,data){


      

       
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'username@gmail.com',
              pass: 'password'
            }
          });
    


    
          var mailOptions = {
            from: 'username@gmail.com',
            to: req.body.email,
            subject: 'Sent from My Site',
            text: 'Here is a link to reset your password',
            html: data
          };
    
    
          transporter.sendMail(mailOptions, function(err, info){
            if (err) {
              res.sendStatus(400);
            } else {
              res.sendStatus(200);
            }
          });//end emailer

        });
    
}//End router.post('/recover')


module.exports.resetPassword = function(req,res,err){

       
        var token = jwt.verify(req.query.token,process.env.SECRET);
        res.render('resetForm.ejs',{email: token.email,token:req.query.token});
        res.end();
}

module.exports.changePassword = function(req,res,err){

 
  var token = jwt.verify(req.body.token,process.env.SECRET);

  User.find({email: token.email}).exec(function(err,docs){
    if(!docs.length){
         res.sendStatus(204);
         res.end();
    }
    else{


      let salt = crypto.randomBytes(16).toString('hex');
      let hash = crypto.pbkdf2Sync(req.body.password, salt, 1000, 64, 'sha512').toString('hex');
      //Grab the user and change their password
      
      User.update({ _id: docs[0]._id }, { $set: { salt: salt, hash: hash}}, function(req,res,err){
           return ; 
      });
      
        res.render('resetSuccess.html');
        res.end();
    }
});
 
 
}
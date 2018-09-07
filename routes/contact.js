var express = require('express');
var nodemailer = require('nodemailer');
var router = express.Router();


router.post('/ticket',function(req,res,next){
    console.log(req.body.name);
    console.log(req.body.email);
    console.log(req.body.message);

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'username@gmail.com',
          pass: 'password'
        }
      });


      var mailOptions = {
        from: 'username@gmail.com',
        to: 'username2@my.unt.edu',
        subject: 'Sent from My Site',
        text: req.body.message
      };


      transporter.sendMail(mailOptions, function(err, info){
        if (err) {
          console.log(err);
          res.sendStatus(400);
        } else {
          res.sendStatus(200);
        }
      });
});




module.exports = router;
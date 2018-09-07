var express = require('express');
var router = express.Router();
var ctrlDownload = require('../controllers/download');
var jwt = require('express-jwt');

var auth = jwt({
    secret: process.env.SECRET,
    userProperty: 'payload'
  });

router.post('/authorize',function(req,res,next){
    res.sendFile('./SonataAllegro.pdf',{root: './views'});
});

router.get('/userScores',auth,ctrlDownload.buildURLs);
router.get('/serve',auth,ctrlDownload.serveFile);


module.exports = router;
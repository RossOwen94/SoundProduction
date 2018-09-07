var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');
var ctrlAuth = require('../controllers/authentication');
var ctrlProfile = require('../controllers/profile');
var ctrlTrans = require('../controllers/transaction');

var auth = jwt({
    secret: process.env.SECRET,
    userProperty: 'payload'
  });


router.get('/profile', auth, ctrlProfile.profileRead);

router.post('/register', ctrlAuth.register);

router.post('/login', ctrlAuth.login);

router.post('/transaction',auth,ctrlTrans.newTransaction);


module.exports = router;
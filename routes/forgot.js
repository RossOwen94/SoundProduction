var express = require('express');
var nodemailer = require('nodemailer');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/users');
var forgotCtrl = require('../controllers/forgot');

router.post('/recover',forgotCtrl.sendRecovery);
router.get('/reset',forgotCtrl.resetPassword);
router.post('/change',forgotCtrl.changePassword);


module.exports = router;
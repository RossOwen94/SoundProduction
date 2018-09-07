var express = require('express');
var nodemailer = require('nodemailer');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/users');
var adminCtrl = require('../controllers/admin');


router.post('/add',adminCtrl.addScore);
router.post('/update',adminCtrl.updateScore);
router.post('/remove',adminCtrl.removeScore);
router.get('/transactions',adminCtrl.listTransactions);
router.get('/users',adminCtrl.listUsers);


module.exports = router;
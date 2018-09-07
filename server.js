var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
const { mongoose } = require('./db.js');
var cors = require('cors');
var passport = require('passport');

var config = require('./config/passport');
var index = require('./routes/index');
var pdfdownload = require('./routes/pdfdownload');
var samples = require('./routes/samples');
var download = require('./routes/download');
var contact = require('./routes/contact');
var users   = require('./routes/users');
var forgot = require('./routes/forgot'); 
var admin = require('./routes/admin');

var port = 1737;
var app = express();

app.use(cors());
app.use(passport.initialize());


app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(express.static(path.join(__dirname,'views')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(function(req,res,next){
    console.log(req.body);
    next();
});

app.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
      res.status(401);
      res.json({"message" : err.name + ": " + err.message});
    }
  });


app.use('/',index);
app.use('/pdfdownload',pdfdownload);
app.use('/samples',samples);
app.use('/download',download);
app.use('/contact',contact);
app.use('/users',users);
app.use('/forgot',forgot);
app.use('/admin',admin);

app.listen(port, function(){
    console.log('Server started on port ' + port);
})
var express = require('express');
<<<<<<< HEAD
=======
var app = express();
>>>>>>> ec8051100d234fe9175dcd73a88d8192aa153d52
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
<<<<<<< HEAD
var passport = require('passport');

var multer = require('multer');
var fs = require('fs');


var flash = require('connect-flash');
var session = require('express-session');

var LocalStrategy = require('passport-local').Strategy;

var users = require('./routes/users');
var editProfile = require('./routes/editProfile');
var profilePic = require('./routes/profilePic');
var materialSave = require('./routes/materialSave');


var app = express();

=======
var session = require('express-session');
var index = require('./routes/index');
var users = require('./routes/users');
var addRegister = require('./routes/addRegister');

var app = express();

mongoose.connect('mongodb://localhost/fellow_profile');
var db = mongoose.collection;

>>>>>>> ec8051100d234fe9175dcd73a88d8192aa153d52
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

<<<<<<< HEAD
=======


app.use(session({secret: 'ssshhhhh',saveUninitialized: true,resave: true}));


>>>>>>> ec8051100d234fe9175dcd73a88d8192aa153d52
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
<<<<<<< HEAD
app.use(require('express-session')({
    secret: 'ssshhhhh',
    resave: false,
    saveUninitialized: false
}));

/* PASSPORT */
app.use(passport.initialize());
app.use(passport.session());
var initPassport = require('./passport/init');
initPassport(passport);
/*          */

app.use('/editProfile', editProfile);
app.use('/profilePic', profilePic);
app.use('/materialSave', materialSave);


app.use(flash());
app.use(express.static(path.join(__dirname, 'public')));

var routes = require('./routes/index')(passport);
app.use('/', routes);
app.use('/users', users);
// app.post('/endpoint', function(req, res){
//   var obj = {};
//   console.log('body: ' + JSON.stringify(req.body));
//   res.send(req.body);
// });


// // passport config


 // passport.use(new LocalStrategy(Account.authenticate()));


// //FUNCTION
// function authenticate(req, username, password, done) {

// 	console.log('authenticate');
//     User.findOne({  email: req.body.email }, function(err, user) {
//       if (err) { 
//       	            console.log('Signup error');
// return done(err); }
//       if (!user) {
//         return done(null, false, { message: 'Incorrect user.' });
//       }
//       if (!user.validPassword(password)) {
//         return done(null, false, { message: 'Incorrect password.' });
//       }
//       return done(null, user);
//     });
//   }


//passport.serializeUser(Account.serializeUser());
//passport.deserializeUser(Account.deserializeUser());

// mongoose
mongoose.connect('mongodb://localhost/myapp', function(err){
	if(err){
		console.log('Couldn\'t connect. Ensure that mongodb is running on localhost.');
	}
});
=======
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/addRegister',addRegister);
>>>>>>> ec8051100d234fe9175dcd73a88d8192aa153d52

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

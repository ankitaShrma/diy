var express = require('express');
<<<<<<< HEAD
var passport = require('passport');
var flash = require('connect-flash')
var User = require('../models/user');
var router = express.Router();

var isAuthenticated = function (req, res, next) {
    // if user is authenticated in the session, call the next() to call the next request handler 
    // Passport adds this method to request object. A middleware is allowed to add properties to
    // request and response objects
    if (req.isAuthenticated())
        return next();
    // if the user is not authenticated then redirect him to the login page
    res.redirect('/');
}
module.exports = function(passport){

    router.post('/endpoint', function(req, res){
  var obj = {};
  console.log('body: lol ' + JSON.stringify(req.body));
  res.send(req.body);
});
    
    router.get('/lol', function(req, res) {
    res.render('lol');
});

    /* GET login page. */
    router.get('/', function(req, res) {
        // Display the Login page with any flash message, if any
        res.render('index', { user: req.user, message: req.flash('message') });
    });

    router.get('/login', function(req, res) {
        // Display the Login page with any flash message, if any
        res.render('login', { message: req.flash('message') });
    });

    /* Handle Login POST */
    router.post('/login', passport.authenticate('local-login', {
        successRedirect: '/profile',
        failureRedirect: '/login',
        failureFlash : true  
    }));

    /* GET Registration Page */
    router.get('/signup', function(req, res){
        res.render('register',{message: req.flash('message')});
    });

    /* Handle Registration POST */
    router.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/',
        failureRedirect: '/signup',
        failureFlash : true  
    })
           
);

    router.get('/material', function(req, res){
        if(req.isAuthenticated())
           { res.render('material');}
        else{
            console.log('log in to continue');
            res.redirect('login');}
    });

    /* GET Home Page */
    router.get('/profile', isAuthenticated, function(req, res){
        res.render('profile', { user: req.user });
    });

    router.get('/lola', function(req, res){
        res.render('lola');
    });

    /* Handle Logout */
    router.get('/signout', function(req, res) {
        req.logout();
        res.redirect('/');
    });

    return router;
}

// router.get('/', function (req, res, next) {
//     res.render('index', { user : req.user });


// });

// router.get('/register', function(req, res) {
//     res.render('register', { info: null });
// });

// router.get('/lol', function(req, res) {
//     res.render('lol');
// });

// router.post('/register', passport.authenticate(), function(req, res) {
   
//     res.redirect('login')
// });

// router.get('/login', function(req, res) {
//     res.render('login', { user : req.user });
// });

// router.post('/login', passport.authenticate(), function(req, res) {
//     console.log('lol');
//     res.redirect('/');
// });

// router.get('/logout', function(req, res) {
//     req.logout();
//     res.redirect('/');
// });

// // =====================================
//     // PROFILE SECTION =====================
//     // =====================================
//     // we will want this protected so you have to be logged in to visit
//     // we will use route middleware to verify this (the isLoggedIn function)
//     router.get('/profile', isLoggedIn, function(req, res) {
//         res.render('profile', {
//             user : req.user // get the user out of session and pass to template
//         });
            

// });

// // 



// // route middleware to make sure a user is logged in
// function isLoggedIn(req, res, next) {

//     // if user is authenticated in the session, carry on 
//     if (req.isAuthenticated())
//         return next();

//     // if they aren't redirect them to the home page
//     res.redirect('/');
// }


// router.get('/ping', function(req, res){
//     res.status(200).send("pong!");
// });

// module.exports = router;
=======
var router = express.Router();

var app = express();

const SignUp = require('../models/signup');

const Users = require('../models/session');



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'DoItYesari' });
});
router.get('/arduinocar', function(req, res, next) {
  res.render('arduinocar', { title: 'Arduino' });
});
router.get('/lol', function(req, res, next) {
  res.render('lol', { title: 'Express' });
});
router.get('/arduinoled', function(req, res, next) {
  res.render('arduinoled', { title: 'Express' });
});
router.get('/powerbank', function(req, res, next) {
  res.render('powerbank', { title: 'Express' });
});

// router.get('/register', function(req, res, next) {
//   SignUp.getSignUps(function(err, signup){
//     res.render('register');
//   })
//   res.render('register', { title: 'Register' });
// });

// router.get('/posturproject', function(req, res, next) {
//   res.render('posturproject', { title: 'Post' });
// });

// router.get('/login', function(req, res, next) {
//   res.render('login', { title: 'Login' });
// });

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});

router.get('/buy', function(req, res, next) {
  res.render('buy', { title: 'Buy' });
});
router.get('/howto', function(req, res, next) {
  res.render('howto', { title: 'HowTo' });
});
router.get('/jellyfish', function(req, res, next) {
  res.render('jellyfish', { title: 'Jellyfish' });
});
router.get('/outer', function(req, res, next) {
  res.render('outer', { title: 'Outer' });
});
router.get('/ballerina', function(req, res, next) {
  res.render('ballerina', { title: 'Ballerina' });
});
router.get('/sukul', function(req, res, next) {
  res.render('sukul', { title: 'Sukul' });
});


function checkSignIn(req, res){
   if(req.session.user){
     /* next(); */
      res.render('posturproject');    //If session exists, proceed to page
   } else {
      var err = new Error("Not logged in!");
      console.log(req.session.user);
      console.log('you must log in');
      next(err);  //Error, trying to access unauthorized page!
   }
}

router.get('/posturproject',function(req,res){
  if(req.session.user){
    res.render('posturproject');
    console.log('user is logged in');
  }
  else{
    console.log('you must be logged in');

    res.redirect('/login');
  }
})

/*var Users = [];*/

/*router.get('/register', checksessionregister,function(req, res){
   res.render('register',{id: req.session.user.username});
});
*/
router.get('/register',function(req,res){
    if(req.session.user){
    res.redirect('/');
    console.log('you are already logged in. Do you want to log in as another user?');
  }
  else{
    res.render('register');
  }
})

router.post('/register', function(req, res){
   if(!req.body.username || !req.body.password){
      res.status("400");
      /*res.send("Invalid details!");*/
      res.render('register',{regerror:'Enter both username and password'});
   } else {
      Users.find({username:{$exists:true}},function(error,user){
        console.log("helloooo",user[0].username);
        var i;
        /*for (i=0;i<5;i++)*/
        user.forEach(function(users,i){
         if(users.username === req.body.username){
            res.render('login', {
               error: "User Already Exists! Login or choose another user id"});
            console.log("user already exists");
        
         }
        })
      });
      var newUser = {username: req.body.username, password: req.body.password};
      /*Users.push(newUser);*/
      var newusersave = new Users(req.body);

        newusersave.save(function(err, doc){
    if (err) {console.log('error while saving in database');}
    /*console.log(doc);*/
    else{
    console.log('saved in database');
     req.session.user = req.body.username;
      res.render('index',{curuser: req.body.username});
    /*res.send(req.body);*/
    /*res.render('/sesindex',{curuser: user.id});
*/   }               
   });

     /* req.session.user = newUser;*/
    
   }
});


/*router.get('/upload', checkSignIn, function(req, res){
   res.render('upload', {username: req.session.user.username});
});*/



/*router.get('/login',checksessionlogin, function(req, res){
   res.render('login',{id: req.session.user.username});
});
*/
router.get('/login',function(req,res){
  if (req.session.user){
    res.redirect('/');
    console.log('user is already logged in');
  }
  else{
    /*res.redirect('/sesindex')*/
    res.render('login', {help: "You must log in to continue..."});
    console.log('user is not logged in');
  }
})

router.post('/login', function(req, res){
/*   console.log(Users);
   if(!req.body.username || !req.body.password){
      res.render('login', {message: "Please enter both id and password"});
      console.log('Enter both username and password');
   } 

   else {
      Users.find({username: {$exists:true}},function(error,user){
        console.log(user[0].username);
        var i;
        user.forEach(function(users,i){
         if(users.username === req.body.username && users.password === req.body.password){
            req.session.user = req.body.username;            
            res.render('index',{curuser: users.username});
            console.log(req.session.user);
           
         }
  })


      });
   }*/
 Users.findOne({ username: req.body.username }, function(err, user) {
    if (!user) {
      res.render('login', { error: 'Invalid email or password.' });
    } else {
      if (req.body.password === user.password) {
        // sets a cookie with the user's info
        req.session.user = user;
        console.log('username correct');
        res.render('index',{curuser:req.body.username});
      } else {
        res.render('login', { error: 'Invalid email or password.'});
      }
    }
  });

});


router.get('/logout', function(req, res){
   req.session.destroy(function(){
      console.log("user logged out.")
   });
   res.redirect('/');
});

router.use('/posturproject', function(err, req, res, next){
console.log(err);
   //User should be authenticated! Redirect him to log in.
   res.redirect('/login');
})


module.exports = router;
>>>>>>> ec8051100d234fe9175dcd73a88d8192aa153d52

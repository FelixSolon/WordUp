//Pull all requirements
var express = require('express');
var db = require("./models");
var router = express.Router();
var path = require('path');
var nodemailer = require('nodemailer');
var userid;                                                    // added km

//Necessary to define the username, or the process.env line errors in a sec.
var username = "asdf";
process.env.username = username;
//set up e-mail configuration.
var smtpTransport = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
        user: "beeproductiveapp@gmail.com",
        //In the "settings" page on Heroku if you really need it, but please don't touch.
        pass: process.env.gmailPassword
    }
});

//Web page entry
router.get('/', function(req,res){
    res.redirect('/home');
});

//Serves the home page
router.get('/home', function(req,res){
    res.render("index", {});
});

//Get the about page
router.get('/about', function(req,res){
    res.render("about", {});

});

//Get the login page
router.get('/login', function(req,res){
    res.send("This is the login page.");
});

//Get the contact page
router.get('/contact', function(req,res){
    console.log(process.env.username);
    res.render("contact", {});

});

//Get the profile page
router.get('/profile/display/:userName', function(req,res){
   //res.send("This is the profile page.");
    console.log(req.params.userName);
     db.User.findAll({
        where: {
          userName:req.params.userName
        }
    }).then(function(dbUser){
        db.UserBugs.findAll({}).then(function(dbBug){
   //   res.json(dbUser);
      res.redirect('/profile');
      res.render("profile", {userData: dbUser, bugData: dbBug});
    });   
  });    
});
//Serves the "Catch a bug!" page
router.get('/bugs', function(req,res){
    db.User.findAll({
        where: {userName: process.env.username}
    }).then(function(dbUser){
        console.log("dbUser");
        console.log(dbUser)
		userid = dbUser[0].id;                           //added km

        db.Bugs.findAll({})
        .then(function(dbBug) {
            res.render("catchBug",{bugData: dbBug, userData: dbUser});  
        });
    });
});

//Create user profile
router.get("/profile", function(req,res){  
    console.log(process.env.username)
    if(process.env.username !== "asdf"){
        console.log("Breaks on db.User");
        db.User.findAll({
            where: {
                userName:process.env.username
            }
        }).then(function(dbUser){
            console.log(dbUser);
            res.render("profile",{userData: dbUser})
        })
    } else {
        res.render("usernameWarning", {signInWarning: "You need to have signed in to view a profile."})
        };
});
        

//get all bugs
router.get("/api/bugs/", function(req, res) {
    db.Bugs.findAll({})
    .then(function(dbBug) {
      res.json(dbBug);  
    });
  });

//get one bug
router.get("/api/bugs/:id", function(req, res) {
    var id = req.params.id;
    db.Bugs.findAll({
        where: {id: id}
    })
    .then(function(dbBug) {
      res.send(dbBug);  
    });
  });

//Update a bug
router.put('/bug/update', function(req,res){
    //pull the ID out of the body
    var id = req.body.bugId;
    console.log(req.body.bugId);
    db.Bugs.update(id, function(result){
        console.log(result);
        res.redirect('/home');
    });
});

//Add a bug
router.post("/bug/create", function(req,res){
    console.log(req.body);
    db.User.update(
    {
    wallet: req.body.wallet
    }
    , {
        where: {
        id: req.body.userID
    }
    }).then(function(result){
        console.log(result);
	    req.body.UserId = userid;                           // added km

        db.UserBugs.create(req.body, function(result){
			
        }).then(function(createdBug){
            //this..doesn't actually do anything. And I don't know why. I'm cheating in Javascript in catchBug.handlebars to redirect.
            res.redirect('/profile');
        });
    });
});

//Send a contact e-mail
router.post("/sendmessage", function(req,res){
    console.log(req.body);
    var mailOptions={
        to : "beeproductiveapp@gmail.com",
        //Because I can't figure out how to make it pretend to be sent by someone with the input e-mail address
        subject : "Sent by " + req.body.email,
        text : req.body.message
    }
    //Black magic/mail configuration copy-pasted.
    console.log(mailOptions);
    smtpTransport.sendMail(mailOptions, function(error, response){
     if(error){
            console.log(error);
        res.end("error");
     }else{
            console.log("Message sent: " + response.message);
        res.redirect("/thankyou");
         }
    });

});

//Serves a thank you page for sending e-mail
router.get("/thankyou", function(req,res){
    res.render("thankyou",{})
})

//collect the username
router.post("/user/select", function(req,res){
    process.env.username = req.body.username;
    console.log("The Username:");
    console.log(req.body);
 //   console.log("process.env.username " + process.env.username);
})
//--------------------------------------------------------------------------
//Add a user
router.post("/user/create", function(req,res){
    console.log("creating a user");
    db.User.create(req.body, function(result){
        console.log(result);
        res.redirect("/");
    });
    res.json(req.body);
    console.log("email": " + req.body.email);
    console.log("profile: " + req.body.profile);
})
//---------------------------------------------------------------------------
//Update a user
router.put("/user/update", function(req,res){
    console.log("You're updating a thing.");
    console.log(req.body);
})

module.exports = router;

var express = require('express');
var router = express.Router();
var Bot = require('../models/bot.js');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({
  extended: true
}));

/* GET home page. */
router.get('/', function (req, res, next) {
  Bot.find({}, function(err, chat){
    if (err) {
      console.log(err);
    } else {
      res.render('index', {
        title: 'Express',
        chat: chat
      });
      
    }
  })
});

/*  */

// New Route
router.get('/new', (req, res) => {
  res.render('new');
});

//New 2 Route
router.get('/new2', (req, res) => {
  res.render('new2');
});


//Create Route
router.post('/create/new', (req, res) => {
  console.log("Reached here!");
  console.log("Print body: " + req.body.bot);

  Bot.create(req.body.bot, function(err, createdBot){
    if (err) {
      console.log(err);
    } else {
      console.log("Created: " + createdBot);
      
    }
  })

  res.redirect('/');
});



// Chat
router.get('/index/chat', (req,res)=>{
  Bot.find({})
    .then((chat)=>{
      console.log(chat);
      
      res.render("myChat", {chat: chat});
    }).catch((err)=>{return(err);
    })

})


module.exports = router;
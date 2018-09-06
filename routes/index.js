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


//Show individual chat
router.get('/index/:id', (req,res)=>{

  Bot.findById(req.params.id, (err, chat)=>{
    if (err) {
      console.log(err);
    } else {
      var choice = 1;
      //iterate through things in the console
      console.log(chat);
      //go through the talk elements first, should match bot's elements
      chat.talk.forEach((element, n) => {
        element.forEach((str) =>{
          //prints whatever bot has to say first
          console.log(str);
        })
        //shows options to the user
        chat.student.decision.forEach(el =>{
          console.log(el);
        })
        // print the choice
        console.log("Chose", choice);
        
        // Once answer is chosen, loop through corresponding array
        chat.student.answer[choice].forEach(answer =>{
          console.log(answer);
          
        });
        
      });

      const myChat = Object.keys(chat)

      res.render('myChat', {chat: chat});    
    }
  });

  
});


// Chat
router.get('/index/chat', (req,res)=>{
  Bot.find({}, (err, text)=>{
    if (err) {
      console.log(err);
    } else {
      console.log();
      
      res.render('chat', {text: text});
    }
  })
  
})


module.exports = router;
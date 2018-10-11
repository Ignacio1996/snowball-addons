var express = require('express');
var router = express.Router();
var Bot = require('../models/bot.js');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');


router.use(methodOverride('_method'));

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


router.get('/index/debug', (req,res)=>{
  Bot.find({}, (err, chat)=>{
    res.render('debug', {chat: chat});

  })
})

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

//Edit Route 
router.get('/index/chat/:id/edit', (req,res)=>{
  Bot.findById(req.params.id, (err, chat)=>{
    res.render('edit', {chat:chat});
  })
});

// Update Route
router.put('/index/chat/:id/edit', (req,res)=>{
  var bot = req.body.bot;
  Bot.findByIdAndUpdate(req.params.id, bot, function(err, updatedBot){
    if (err) {
      console.log(err);
    } else {
      console.log(updatedBot);
    }
  })
    
  console.log(bot);
  res.redirect('/');

});


// Chat
router.get('/index/chat', (req,res)=>{
  Bot.find({})
    .then((chat)=>{
      console.log(chat);
      
      res.render("myChat", {chat: chat});
    })
    
    .catch((err)=>{return(err);
    })
})

// Delete Route
router.delete('/index/chat/delete/:id', (req,res)=>{
  Bot.findByIdAndRemove(req.params.id, (err)=>{
    if (err) {
      console.log(err)
    } else {
      res.redirect('/');
    }
  })
});

// Budget Routes
router.get('/index/budget', (req,res)=>{
  res.render("./budget/budget");
})

module.exports = router;
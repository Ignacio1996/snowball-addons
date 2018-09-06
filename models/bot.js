let mongoose = require('mongoose');

var myBot = new mongoose.Schema({
    name: String,
    talk: Object,
    student: Object
});

module.exports = mongoose.model('Bot', myBot);




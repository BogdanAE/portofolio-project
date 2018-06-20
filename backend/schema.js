var mongoose = require('mongoose');

var textSc = mongoose.Schema({
    lang: String,
    where1: String,
    where2: String,
    pId: Number,
    text: String
});

var message = mongoose.Schema({
    nume: String,
    mail: String,
    message: String
});

module.exports = {
    textSc: textSc,
    message: message
}
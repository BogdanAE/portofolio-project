var mongoose = require('mongoose');

var textSc = mongoose.Schema({
    lang: String,
    where1: String,
    where2: String,
    pId: Number,
    text: String
});

module.exports = {
    textSc: textSc
}
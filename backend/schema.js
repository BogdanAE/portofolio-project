var mongoose = require('mongoose');

var textSc = mongoose.Schema({
    lang: String,
    where1: String,
    text1: String
});

module.exports = {
    textSc: textSc
}
var mongoose = require('mongoose');
var schema = require('./schema');

var textModel = mongoose.model('textModel', schema.textSc, 'textmodels');

var message = mongoose.model('message', schema.message, 'messages');

module.exports = {
    textModel: textModel,
    message: message
}
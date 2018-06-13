var mongoose = require('mongoose');
var schema = require('./schema');

var textModel = mongoose.model('textModel', schema.textSc, 'textmodels');

module.exports = {
    textModel: textModel
}
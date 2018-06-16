var model = require('./model');

var createText = (data) => {
    var text = model.textModel({
        lang: data.lang,
        where1: data.where1,
        where2: data.where2,
        pId: data.pId,
        text: data.text
    });
    text.save((err, text) => {
        if(err){
            console.log(err);
            return err;
        }
    });
};

var getTextRo = (res) => {
    model.textModel.find({'lang': 'ro', 'where2': 'small'}, (err, data) => {
        if(err){
            console.log(err);
        }
        console.log('RO text requested');
        res.send(data);
    });
};

var getTextEn = (res) => {
    model.textModel.find({'lang': 'en', 'where2': 'small'}, (err, data) => {
        if(err){
            console.log(err);
        }
        console.log('EN text requested');
        res.send(data);
    });
};

module.exports = {
    createText,
    getTextRo,
    getTextEn
}



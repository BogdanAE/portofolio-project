const express = require('express');
var mongoose = require('./mongoose');
var model = require('./model');
var service = require('./service');
var bodyParser = require('body-parser');
const path = require('path');

var app = express();
var PORT = process.env.PORT || 3000;

mongoose.connect();

app.use(express.static(path.join(__dirname, '../frontend/')));
// app.use('/add', express.static(path.join(__dirname, '../frontend/add/')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//LINK FROM EXPRESS TO MONGOOSE
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.post('/add', (req, res) => {
    service.createText(req.body);
    //res.send('text posted');
    console.log('text posted');
    res.redirect('/add.html')
});

app.post('/addMessage', (req, res) => {
    service.createMessage(req.body);
    //res.send('text posted');
    console.log('message posted');
    res.redirect('/')
});

app.get('/add.html', (req,res ) => {
    // res.send();
});

app.get('/getTextRoSmall', (req, res) =>{
    service.getTextRo(res);
});

app.get('/getTextEnSmall', (req, res) =>{
    service.getTextEn(res);
});

app.get('/getTextRoBig', (req, res) =>{
    service.getTextRoBig(res);
});

app.get('/getTextEnBig', (req, res) =>{
    service.getTextEnBig(res);
});


app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})
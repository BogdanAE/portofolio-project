const express = require('express');
var bodyParser = require('body-parser');


var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.static('../frontend'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/check', (req, res) => {
   res.send('<h1>hello express!</h1>');
});

app.listen(3000, () => {
    console.log(`server running on port ${PORT}`)
});

const mongoose = require('mongoose');

const URL = 'mongodb://test:test1234@ds159110.mlab.com:59110/heroku_s9h4fcdr';

mongoose.connect(URL);

var dataB = mongoose.connection;

var connect = () => {
    dataB.on('error', (err) => {
        console.log('could NOT connect to MONGOOSE servers!')
    }),
    dataB.on('open', () => {
        console.log('Connected to MONGOOSE servers!!')
    })
}

module.exports = {
    connect: connect
}
const mongoose = require('mongoose');

const connection = mongoose.createConnection('mongodb://localhost:27017/newData').on('open', ()=> {
    console.log('mongodb connected successfully');
}).on('error', ()=> {
    console.log('mongodb connection error');
});
module.exports = connection;
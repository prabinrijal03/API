const express = require('express');
const app = express();
const mongoose = require('mongoose');
const db = require('./config/db');
const userModel = require('./model/user.model');

app.get('/', (req,res) =>{
    res.send('Hellooo world!!!!!');
});

const port = process.env.PORT || 3000;
app.listen(port, (req,res)=>{
    console.log(`Server started at port ${port}`);
});
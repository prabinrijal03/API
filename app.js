const express = require('express');
const app = express();
const db = require('./config/db');
const userModel = require('./model/user.model');
const bodyParser = require('body-parser');
const userRouter = require('./routers/user.router');

app.get('/', (req,res) =>{
    res.send('Hellooo world!!!!!');
});

app.use(bodyParser.json());
app.use('/', userRouter);

const port = process.env.port || 3000;
app.listen(port, (req,res)=>{
    console.log(`Server started at port ${port}`);
});
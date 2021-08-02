/* packages we need to plug
* express
*mongoose
* *nodemon-install global- npm i nodemon g
* cors origin
* dotenv    (api auth keys.not sharing with git)
* */

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const port=process.env.USER_PORT;

const app=express();
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/robotikka",
    {
        useNewUrlParser:true,
        useUnifiedTopology:true,
        useFindAndModify:false,
        useCreateIndex:true
    }
    ).then(()=>{

        app.listen(port,()=>{
            console.log('Robotikka user service up and running on ${port}')
        });

}).catch((error=>{
    console.log(error);
}))
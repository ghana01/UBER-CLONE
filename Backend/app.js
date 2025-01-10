const  dotenv=require('dotenv');
dotenv.config();
const express = require('express');
const cors =require('cors');
const connectToDb = require('./db/db.js');
const userRoute = require('./routes/user.route.js');


const app =express();
connectToDb();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))



app.get('/',(req,res)=>{
    res.send('Hello World');
});


app.use('/user',userRoute);


module.exports=app;
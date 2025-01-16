const  dotenv=require('dotenv');
dotenv.config();
const express = require('express');
const cors =require('cors');
const connectToDb = require('./db/db.js');
const cookieParser =require('cookie-parser');
const userRoutes = require('./routes/user.route.js');
const captainRoutes = require('./routes/captain.route.js');


const app =express();
connectToDb();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cookieParser());



app.get('/',(req,res)=>{
    res.send('Hello World');
});


app.use('/user',userRoutes);
app.use('/captain',captainRoutes)


module.exports=app;
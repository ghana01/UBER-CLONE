const mongoose = require('mongoose');

function connectToDb(){
    mongoose.connect("mongodb://127.0.0.1:27017/Uber_Clone")
    .then(()=>{
        console.log('Connected to Database');
    })
    .catch((error)=>{
        console.log('Error:',error);
    });
}

module.exports=connectToDb;
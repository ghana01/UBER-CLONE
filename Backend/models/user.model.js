const mongoose =require('mongoose');
const bcrypt=require('bcrypt');
const jwt =require('jsonwebtoken');
const dotenv=require('dotenv');
dotenv.config();
const userSchema=new mongoose.Schema({
    fullname:{
        firstname:{
            type:String,
            required:true,
            minlength:[3,'First name must be atleast 3 characters'],
        },
        lastname:{
            type:String,
            minlength:[3,'Last name must be atleast 3 characters'],
        }
    },
    email:{
        type:String,
        required:true,
        unique:true,
        minlength:[6,'Email must be atleast 6 characters'],
    },
    password:{
        type:String,
        required:true,
        select:false,
       
    },
    socketId:{
        type:String,
    }
},{timestamps:true});

userSchema.methods.generateAuthToken=async function(){
    const JWT_SECRET="uber-clone-secrate!@#";
    const token =jwt.sign({_id:this._id},JWT_SECRET);
    return token;
}
userSchema.methods.comparePassword=async function(password){
    return await bcrypt.compare(password,this.password);
}
userSchema.statics.hashPassword=async function(password){
    return await bcrypt.hash(password,10);
}

const userModel=mongoose.model('user',userSchema);

module.exports=userModel;
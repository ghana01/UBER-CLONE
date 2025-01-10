const userModel =require('../models/user.model.js')
const bcrypt =require('bcrypt')
const dotenv =require('dotenv')
dotenv.config()
const jwt =require("jsonwebtoken")

module.exports.authUser =async (req,res,next)=>{
    const token =req.cookies.token || req.headers.authorization.split(' ')[1];
    console.log(token);
    if(!token){
        return res.status(401).json({message:'unauthorized'});
    }
    const  isBlacklisted =await userModel.findOne({token:token});
    if(isBlacklisted){
        return res.status(401).json({message :'Unauthorized'})
    }
    try{
        const decode =jwt.verify(token,process.env.JWT_SECRET)
        console.log(decode);
        const user = await userModel.findById(decode._id)
        console.log(user)

        req.user =user;
        return next();
    }catch(err){
        return res.status(401).json({message:'unauthorized'});
    }

}
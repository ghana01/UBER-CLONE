const userModel =require('../models/user.model.js')
const blackListTokenModel =require('../models/blacklistToken.model.js')
const captainModel =require('../models/captain.model.js')
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
    const  isBlacklisted =await blackListTokenModel.findOne({token:token});
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
module.exports.authCaptain =async (req,res,next)=>{
    const token = req.cookies.token || req.headers.authorization?.split(' ')[ 1 ];


    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    const isBlacklisted = await blackListTokenModel.findOne({ token: token });

    if (isBlacklisted) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const captain = await captainModel.findById(decoded._id)
        req.captain = captain;

        return next()
    } catch (err) {
        console.log(err);

        res.status(401).json({ message: 'Unauthorized' });
    }
}
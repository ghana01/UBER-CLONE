const mongoose =require("mongoose")
const bcrypt = require('bcrypt')
const jwt =require('jsonwebtoken')
const dotenv = require('dotenv');
dotenv.config();
const captainSchema =new mongoose.Schema({
    fullname:{
        firstname:{
            type:String,
            required:true,
            minlength:[3,"firstname must be atleast 3 character long"]
        },
        lastname:{
            type:String,
            required:false,
            minlength:[3,"last name is arleas 3 char long"]
        }
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        match: [ /^\S+@\S+\.\S+$/, 'Please enter a valid email' ]

    },
    password:{
        type:String,
        required:true,
        select: false,
    },
    socketId:{
        type:String,

    },
    status:{
        type:String,
        enum:['active','inactive'],
        default:'inactive'
    },
    vehicle:{
        color:{
            type:String,
            required:true,
            minlength:[3,'color must be at 3 char long']
        },
        plate:{
            type:String,
            required:true,
            minlength:[3,'plate must be alteast 3 char long']
        },
        capacity:{
            type:String,
            require:true,
            min:[1,'capacity must be at least 1']
        },
        vehicleType:{
            type:String,
            required:true,
            enum:['car','motorcycle','auto'],
        }
    },
    location:{
        lat:{
            type:Number,
        },
        lng:{
            type:Number,
        }

    }
})

captainSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, { expiresIn: '24h' });
    return token;
}

captainSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}

captainSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password,10);
}

const captainModel = mongoose.model('captain', captainSchema)

module.exports = captainModel;
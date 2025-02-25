const express = require('express');
const {body}=require('express-validator')
const  userController =require('../controllers/user.controller.js');
const authMiddleware =require('../middlewares/auth.middleware.js')
const router = express.Router();

router.post('/register',[
     body('email').isEmail().withMessage('Invalid Email'),
     body('fullname.firstname').isLength({min:3}).withMessage('first name must be atleast 3 characters'),
     body('password').isLength({min:6}).withMessage('Password must be atleast 6 characters')
    
],
   userController.registerUser
)
router.post('/login',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({min:6}).withMessage('Password must be atleast 6 characters'),
],
    userController.loginUser
)

router.get('/profile',authMiddleware.authUser, userController.getUserProfile)
router.get('/logout',authMiddleware.authUser,userController.logoutUser)


module.exports=router;
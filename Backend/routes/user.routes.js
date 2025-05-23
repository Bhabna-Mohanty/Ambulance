const express = require('express');
const router = express.Router();
const{body} = require('express-validator');
const userController = require('../controllers/user.controllers.js');
const authMiddleware = require('../middlewares/auth.middleware.js');

router.post('/register',[
    body('fullname.firstname').isLength({min:3}).withMessage('Fisrt name must be atleast 3 character long'),
    body('email').isEmail().withMessage('Invalid email'),
    body('password').isLength({min:6}).withMessage('Password must be at least 6 characters long')
],
userController.register
);

router.post('/login',[
    body('email').isEmail().withMessage('Invalid email'),
    body('password').isLength({min:6}).withMessage('Password must be at least 6 characters long')
],
   userController.loginUser
);

router.get('/profile',authMiddleware.authUser,userController.getUserProfile)

router.get('/logout',authMiddleware.authUser,userController.logoutUser);



module.exports = router;
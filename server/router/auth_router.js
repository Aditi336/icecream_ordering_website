const express=require('express')
const router=express.Router()
const auth_contollers=require('./controller/auth_controller')
const validate  = require('../middleware/validate_middleware')
const Schema=require("../validators/auth_validator")
const authMiddleware = require('../middleware/auth_middleware')

router
    .route("/")
    .get(auth_contollers.home)


router
    .route("/register")
    .post(validate.validate(Schema.signSchema),auth_contollers.register)
    

router
    .route("/login")
    .post (validate.validate(Schema.loginSchema),auth_contollers.login)
    
router
    .route("/user")
    .get(authMiddleware,auth_contollers.user)
// router
//     .route("/forgotpassword")
//     .post (auth_contollers.forgotpassword)
   
module.exports=router
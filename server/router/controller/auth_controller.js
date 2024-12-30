const bcrypt=require('bcrypt')
const User=require("../../models/user_model")

const home=async(req,res)=>{
    try {
         res.status(200).send("Welcome to polar bear")
    } catch (error) {
        console.log(error)
    }
}

const register=async(req,res)=>{
    try {
        console.log(req.body)
        const {username,email,phone,password}=req.body;

        const userExits=await User.findOne({email})

        if(userExits){
            return res.status(400).json({messgae:"email already exits"})
        }

        const usercreated=await User.create({username,email,phone,password})
        res.status(201).json({
            message:"registration succesful",
            token:await usercreated.generateToken(),
            userId:usercreated._id.toString(),
        })
        
    } catch (error) {
        // console.log(error)
        res.status(500).json("page not found")
    }
}

const login=async(req,res)=>{
    try {
        const {email,password}=req.body
        console.log(req.body)

        const userExits=await User.findOne({email})
        console.log(`existing user ${userExits}`)

        if(!userExits){
            return res.status(400).json({messgae:"user has not registered"})
        }

        const user=bcrypt.compare(password,userExits.password)
        
        if(user){
            res.status(200).json({
                messgae:"login successful",
                token:await userExits.generateToken(),
                userId:userExits._id.toString()
            })
        }
        else{
            res.status(400).json({messgae:"invalid password"})
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({messgae:"internal server error"})
    }
}

const forgotpassword=async(req,res)=>{

    try {
        const {email}=req.body
    const UserExits=await User.findOne({email})

    if(!UserExits){
        return res.status(400).json({messgae:"user has not registered"})
    }
    var nodemailer = require('nodemailer');

    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'aditijuly2004@gmail.com',
        pass: 'Aditi@9036'
      }
    });
    
    var mailOptions = {
      from: 'aditijuly2004@gmail.com',
      to: email,
      subject: 'Reset password',
      text: 'That was easy!'
    };
    
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
    } catch (error) {
        console.log(error)
    }
    
}

const user=async(req,res)=>{
    try{
    const userData=req.user
    console.log("userData",userData)
    return res.status(200).json({userData})
    }
    catch(error){
        console.log(error)
    }
}

module.exports={home,register,login,forgotpassword,user}
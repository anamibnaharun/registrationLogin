const express= require('express')
const router=express.Router();
//const db=require('../utils/database');
const User = require('../models/user');
router.get('/register',(req,res,next)=>{
    res.render('register');
})
router.post('/register',(req,res,next)=>{
    user= new User({
        userName:req.body.userName,
        email:req.body.email,
        phoneNumber:req.body.phoneNumber,
        password:req.body.password
    });
    user.save()
    .then(()=>{
        console.log('saved to the database');
        res.redirect('/login');
    })
    .catch(err=>{
        console.log(err);
    });

})

module.exports=router;

const express=require('express');
const router=express.Router();
const User = require('../models/user');
 
router.get('/login',(req,res,next)=>{
    res.render('login');
})
router.post('/login',(req,res,next)=>{
    console.log(req.body.email);
    console.log(req.body.password);
    User.findOne({email:req.body.email,password:req.body.password})
    .then(user=>{
        console.log(user);
        if(user!=null)res.redirect('/success');
        else res.redirect('/error');
    })
    .catch(err=>{
       console.log(err)
    })
})
module.exports=router;
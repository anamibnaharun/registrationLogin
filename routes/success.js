const express=require('express');
const router=express.Router();
 
router.get('/success',(req,res,next)=>{
    res.send('You are successfully logged in to the system');
})
module.exports=router;
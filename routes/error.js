const express=require('express');
const router=express.Router();
 
router.get('/error',(req,res,next)=>{
    res.send('You are not registerred to the system.Please register then log in.');
})
module.exports=router;
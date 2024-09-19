const app = require('express').Router()
const loginodel = require('../model/login');

app.post ('/loginview',async(reuest,response)=>{
    const{username,password} = reuest.boddy;
    console.log(reuest.body)
    try{
        const user=await loginmodel.findOne({username,password});
        if(user){
            response.json({success:true,message:'login successful'});
        }
        else{
            response.json({success:false,message:'Invalid password and Email'})
        }
    }
    catch(error){
        response.status(500).json({success:false,message:'Errror during login'});
    }
    
});
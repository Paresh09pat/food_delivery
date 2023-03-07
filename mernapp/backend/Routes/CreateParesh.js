const express = require('express')
const router = express.Router()
const User = require('../models/User')

 router.post('./createuser', async (req,res)=>{
try {
  await User.create({
        name: 'Paresh',
        password: "1223334444",
        email:'shamdas@gmail.com',
        location:'dyty uyg6tc'
    })
    res.json({success:true});
} catch (error) {
    console.log(error);
    res.json({success:false});
}
})

module.exports= router
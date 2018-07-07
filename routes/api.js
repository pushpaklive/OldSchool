const mongoose = require('mongoose');
const db = "mongodb://pushpak:pushpak1@ds129801.mlab.com:29801/oldschool-db";
const express = require('express')
const router = express.Router()
const User = require('../models/user')


mongoose.connect(db, err => {
    if(err)
     console.log(err)
    else
     console.log('Successfully connected to : '+db)
});

router.get('/',(req, res) => {
      res.send('Hi from Pushpak - My First API!!!!!');
});

//This is our registration API
router.post('/register', function(req, res){
    let userData = req.body
    let user = new User(userData)

    user.save((err, newUserData) => {
        if(err){
            console.error("Error in registering user : "+err)
        }
        else{
            res.status(200).json(newUserData)
        }
    })
})

//Phase 2 starts-making login api
router.post('/login', (req, res) => {
    let userData = req.body;
    const user = new User(userData);

    User.findOne({name : user.name}, (err, user) => {
        if(err){
            console.error("error in login : caused by : ",err)
        }
        else{
            if(!user){
                res.status(401).json("Invalid name")
            }else if(user.password !== userData.password){
                res.status(401).json("Invalid Password!")
            }
            else{
                res.status(200).json(user)
            }
        }
    })
})



module.exports = router
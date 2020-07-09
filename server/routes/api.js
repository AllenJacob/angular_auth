const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/user')
const db='mongodb+srv://new_allen:allen12345@mycluster.lzkwj.azure.mongodb.net/eventdb?retryWrites=true&w=majority';
 
mongoose.connect(db,function(err){
    if(err){
        console.error('Error!' + err)
    }
    else
    {
        console.log('Connected to mongodb')
    }
})
router.post('/register',(req,res)=>{
    let userData = req.body
    let user = new User(userData)
    user.save((err,registeredUser)=>{
        if(err) {
            console.log(err)
        }
        else
        {
            res.status(200).send(registeredUser)
        }
    })
})
router.get('/',(req,res)=>{
    res.send("FROM API")
})
router.get('/events',(req,res)=>{
    let events = [
        {
            "_id":"1",
            "name":"Auto Expo",
            "description":"lorem ipsum",
            "date":"2012-04-23T18:25:43:511Z"
        },
        {
            "_id":"2",
            "name":"Auto Expo",
            "description":"lorem ipsum",
            "date":"2012-04-23T18:25:43:511Z"
        },
        {
            "_id":"3",
            "name":"Auto Expo",
            "description":"lorem ipsum",
            "date":"2012-04-23T18:25:43:511Z"
        },
        {
            "_id":"4",
            "name":"Auto Expo",
            "description":"lorem ipsum",
            "date":"2012-04-23T18:25:43:511Z"
        },
        {
            "_id":"5",
            "name":"Auto Expo",
            "description":"lorem ipsum",
            "date":"2012-04-23T18:25:43:511Z"
        },
        {
            "_id":"6",
            "name":"Auto Expo",
            "description":"lorem ipsum",
            "date":"2012-04-23T18:25:43:511Z"
        },
        {
            "_id":"7",
            "name":"Auto Expo",
            "description":"lorem ipsum",
            "date":"2012-04-23T18:25:43:511Z"
        },
    ]
    res.json(events)
})
router.get('/special',(req,res)=>{
    let events = [
        {
            "_id":"1",
            "name":"Auto Expo Special",
            "description":"lorem ipsum",
            "date":"2012-04-23T18:25:43:511Z"
        },
        {
            "_id":"2",
            "name":"Auto Expo Special",
            "description":"lorem ipsum",
            "date":"2012-04-23T18:25:43:511Z"
        },
        {
            "_id":"3",
            "name":"Auto Expo Special",
            "description":"lorem ipsum",
            "date":"2012-04-23T18:25:43:511Z"
        },
        {
            "_id":"4",
            "name":"Auto Expo Special",
            "description":"lorem ipsum",
            "date":"2012-04-23T18:25:43:511Z"
        },
        {
            "_id":"5",
            "name":"Auto Expo Special",
            "description":"lorem ipsum",
            "date":"2012-04-23T18:25:43:511Z"
        },
        {
            "_id":"6",
            "name":"Auto Expo Special",
            "description":"lorem ipsum",
            "date":"2012-04-23T18:25:43:511Z"
        },
        {
            "_id":"7",
            "name":"Auto Expo Special",
            "description":"lorem ipsum",
            "date":"2012-04-23T18:25:43:511Z"
        },
    ]
    res.json(events)
})

router.post('/login',(req,res)=>{
    let userData = req.body
    User.findOne({email: userData.email},(err,user)=>{
        if(err)
        {
            console.log(err)
        }
        else if(!user){
            res.status(401).send('Invalid Email')
        }
        else if(user.password!=userData.password){
            res.status(401).send('Invalid Password')
        }
        else{
            res.status(200).send(user)
        }
    })
})

module.exports = router;
const User = require('../models/user')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userController = {}

userController.list = (req,res) => {
    User.find()
    .then((response)=>{
        res.json(response)
    })
    .catch((err)=>{
        res.json(err)
    })
}

userController.register = (req, res) => {
    const body = req.body 
    const user = new User(body)
    user.save()
    .then((user) => {
        res.json(user)
    })
    .catch((err) => {
        res.json(err)
    })
}

userController.login = (req,res) => {
    const body = req.body
    User.findOne({ email: body.email })
    .then((user) => {
        if(user) { 
            bcryptjs.compare(body.password, user.password)
                .then((result) => {
                    if(result) {
                        const tokenData = {
                            id: user._id
                        }
                        const token = jwt.sign(tokenData, 'miniLearingApp@123', { expiresIn: '2d'})
                        res.json({ token : token })
                    } 
                    else {
                        res.json({ errors : 'invalid email / password' })
                    }
                })
            // console.log(user.password) // encrypted password
            }
        }
    )
}

userController.account = (req,res) =>{
    User.findById(req.userId)
    .then((user)=>{
        res.json(user)
    })
    .catch((err)=>{
        res.json(err)
    })
}

module.exports = userController
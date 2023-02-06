// function which send data to database and update it

const { model } = require('mongoose')
const { hashSync } = require('bcrypt')
const { sign } = require('jsonwebtoken')
const { UserSchema } = require('../models/userModel')

const Users = model('Users', UserSchema)

export const loginRequired = (req, res, next) => {
    if(req.user){
        next()
    } else {
        return res.status(401).json({message: "Unauthorized user!"})
    }
    
}

export const register = (req, res) => {
    let newUser = new Users(req.body)
    newUser.hashPassword = hashSync(req.body.password, 10)
    newUser.save((err, user) => {
        if(err){
            res.status(400).send({ message: err})
        }
        newUser.hashPassword = undefined
        res.json(user)
    })
}

export const login = (req, res) => {
    Users.findOne({ email: req.body.email}, (err, user) => {
        if(err){
            res.send(err)
        }
        if(!user){
            res.status(401).json({ message: "Authentication failed. No user Found"})
        } else {
            if(!user.comparePassword(req.body.password, user.hashPassword)){
                // not match
                res.status(401).json({ message: "Authentication failed. wrong password"})
            } else {

                res.json({toekn: sign({email: user.email, username: user.userName, _id: user.id}, "RESTFUL_SCERET_KEY")})
            }
        }
    })
}

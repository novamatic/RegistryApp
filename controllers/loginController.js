const session = require('express-session')
const { app } = require('./../app');

const { mongoose } = require('./../db/mongoose')
const { User } = require('./../models/user')

loginForm = (req, res) => {
    let formUser = {
        'email': req.body.email,
        'password': req.body.password
    }

    User.findOne({email: formUser.email}).then(result => {
        let tempUser = new User(result)
        if (tempUser.comparePassword(formUser.password)) {
            return res.redirect('/home')
        } else {
            res.status(401).redirect('/')
        }
    }).catch( e => {
        console.log(e)
    })
}

module.exports = {
    loginForm
}
const session = require('express-session')
const { app } = require('./../app')

const { mongoose } = require('./../db/mongoose')
const { Record } = require('./../models/record')

deleteControl = (req, res) => {
    if (!req.session.loggedIn) {
        return res.redirect('/')
    }

    Record.remove({_id: req.query.id}).then(result => {
        res.redirect('/home')
    }).catch( err => {
        console.log(err)
    })
}

module.exports = {
    deleteControl
}
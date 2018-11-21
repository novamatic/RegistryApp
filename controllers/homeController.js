const session = require('express-session')
const { app } = require('./../app');

const { mongoose } = require('./../db/mongoose')
const { Record } = require('./../models/record')

homeControl = (req, res) => {
    if (!req.session.loggedIn) {
        return res.redirect('/')
    }
    Record.find({alias: req.session.alias}).select('-__v').then(result => {
        res.render('home', {records: result})
        //console.log(result)
    }).catch( err => {
        console.log(err)
    })
}

module.exports = {
    homeControl
}
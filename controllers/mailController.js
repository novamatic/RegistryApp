const session = require('express-session')
const { app } = require('./../app')
const { mongoose } = require('./../db/mongoose')
const { User } = require('./../models/user')
const { transporter } = require('../mailer/transporter');

mailControl = (req, res) => {
    if (!req.session.loggedIn) {
        return res.redirect('/')
    }
    if (!req.session.priveleged) {
        return res.redirect('/home')
    }

    User.find({alias: req.body.mail}).select('email').then( result => {
        let mailOptions = {
            from: 'registry.app.noreply@gmail.com',
            to: result[0].email,
            subject: 'Uzupełnienie godzin pracy',
            text: 'Dzień dobry, serdecznie prosimy o uzupełnienie godzin czasu pracy. Dziękujemy!'
        } 
        
        transporter.sendMail(mailOptions, (err, info) => {
            if(err) {
                console.log(err)
            } else {
                transporter.close()
                return res.redirect('/analysis')
            }
        })
    }).catch(err => {
        console.log(err)
    })
    
}

module.exports = {
    mailControl
}
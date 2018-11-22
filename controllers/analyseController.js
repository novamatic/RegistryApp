const session = require('express-session')
const _ = require('lodash');

const { app } = require('./../app')
const { mongoose } = require('./../db/mongoose')
const { User } = require('./../models/user')
const { Project } = require('./../models/project')
const { Record } = require('./../models/record')

analyseController = (req, res) => {
    if (!req.session.loggedIn) {
        return res.redirect('/')
    }
    if (!req.session.priveleged) {
        return res.redirect('/home')
    }

    User.find().select('alias').then(function (userResult) {
        Project.find().select('project').then(function (projectResult) {
            Record.find().select('-_id -__v').sort([['date', 'asc']]).then(function (recordResult) {
                return res.render('analysis', { users: userResult, projects: projectResult, records: recordResult })
            }).catch(err => {
                console.log(err)
            })
        }).catch(err => {
            console.log(err)
        })
    }).catch(err => {
        console.log(err)
    })
}

analyseTable = (req, res) => {
    if (!req.session.loggedIn) {
        return res.redirect('/')
    }
    if (!req.session.priveleged) {
        return res.redirect('/home')
    }

    User.find().select('alias').then(function (userResult) {
        Project.find().select('project').then(function (projectResult) {
            let month = req.body.month
            let user = req.body.user
            let project = req.body.project

            if(month=='-') {
                if (user == '-') {
                    if (project == '-') {
                        Record.find().select('-_id -__v').sort([['date', 'asc']]).then(function (recordResult) {
                            return res.render('analysis', { users: userResult, projects: projectResult, records: recordResult })
                        }).catch(err => {
                            console.log(err)
                        })
                    } else {
                        Record.find({project: req.body.project}).select('-_id -__v').sort([['date', 'asc']]).then(function (recordResult) {
                            return res.render('analysis', { users: userResult, projects: projectResult, records: recordResult })
                        }).catch(err => {
                            console.log(err)
                        })
                    }
                } else {
                    if (project == '-') {
                        Record.find({alias: req.body.user}).select('-_id -__v').sort([['date', 'asc']]).then(function (recordResult) {
                            return res.render('analysis', { users: userResult, projects: projectResult, records: recordResult })
                        }).catch(err => {
                            console.log(err)
                        })
                    } else {
                        Record.find({alias: req.body.user, project: req.body.project}).select('-_id -__v').sort([['date', 'asc']]).then(function (recordResult) {
                            return res.render('analysis', { users: userResult, projects: projectResult, records: recordResult })
                        }).catch(err => {
                            console.log(err)
                        })
                    }
                }
            } else {
                if (user == '-') {
                    if (project == '-') {
                        Record.find({month: req.body.month}).select('-_id -__v').sort([['date', 'asc']]).then(function (recordResult) {
                            return res.render('analysis', { users: userResult, projects: projectResult, records: recordResult })
                        }).catch(err => {
                            console.log(err)
                        })
                    } else {
                        Record.find({month: req.body.month, project: req.body.project}).select('-_id -__v').sort([['date', 'asc']]).then(function (recordResult) {
                            return res.render('analysis', { users: userResult, projects: projectResult, records: recordResult })
                        }).catch(err => {
                            console.log(err)
                        })
                    }
                } else {
                    if (project == '-') {
                        Record.find({month: req.body.month, alias: req.body.user}).select('-_id -__v').sort([['date', 'asc']]).then(function (recordResult) {
                            return res.render('analysis', { users: userResult, projects: projectResult, records: recordResult })
                        }).catch(err => {
                            console.log(err)
                        })
                    } else {
                        Record.find({month: req.body.month, alias: req.body.user, project: req.body.project}).select('-_id -__v').sort([['date', 'asc']]).then(function (recordResult) {
                            return res.render('analysis', { users: userResult, projects: projectResult, records: recordResult })
                        }).catch(err => {
                            console.log(err)
                        })
                    }
                }
            }
        }).catch(err => {
            console.log(err)
        })
    }).catch(err => {
        console.log(err)
    })
}

module.exports = {
    analyseController,
    analyseTable
}
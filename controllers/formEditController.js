const session = require('express-session')
const { app } = require('./../app')

const { mongoose } = require('./../db/mongoose')
const { Record } = require('./../models/record')

editControl = (req, res) => {
    if (!req.session.loggedIn) {
        return res.redirect('/')
    }
    Record.find({ _id: req.query.id }).select('-__v').then(result => {
        console.log(result)
        res.render('formedit', { records: result })
    }).catch(err => {
        console.log(err)
    })
}

updateForm = (req, res) => {
    if (!req.session.loggedIn) {
        return res.redirect('/')
    }

    Record.remove({ _id: req.query.id }).then(result => {
        console.log(req.query.id)
    }).catch(e => {
        res.status(400).send(e)
    })

    let month = new Date(req.body.date).getMonth()

    let bodyObj = {
        'alias': req.session.alias,
        'date': req.body.date,
        'month': month,
        'project': req.body.project,
        'client': req.body.client,
        'type': req.body.type,
        'sprint': req.body.sprint,
        'task': req.body.task,
        'description': req.body.description,
        'time': req.body.time
    }
    let record = new Record(bodyObj)

    record.save().then(() => {
        res.redirect('/home')
    }).catch((e) => {
        res.status(400).send(e)
    })

}
// Record.findByIdAndUpdate(req.query.id, bodyObj, {}).then((result) => {
//     console.log(result)
//     res.redirect('/home')
// }).catch((e) => {
//     res.status(400).send(e)
// })


module.exports = {
    editControl,
    updateForm
}
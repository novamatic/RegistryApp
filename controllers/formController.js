const { mongoose } = require('./../db/mongoose')
const { Record } = require('./../models/record')

formControl = (req, res) => {
    if (!req.session.loggedIn) {
        return res.redirect('/')
    }
    res.render('form');
}

saveForm = (req, res) => {
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

module.exports = {
    saveForm, 
    formControl
}
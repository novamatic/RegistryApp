const { mongoose } = require('./../db/mongoose')
const { Record } = require('./../models/record')

saveForm = (req, res) => {

    let date = req.body.date
    date = date.toString()

    let bodyObj = {
        'alias': req.session.alias,
        'date': date,
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
    saveForm
}
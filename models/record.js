const mongoose = require('mongoose');
const _ = require('lodash');

let RecordSchema = new mongoose.Schema({
    alias: {
        type: String,
        required: true,
        trim: true
    },
    date: {
        type: Date,
        required: true
    },
    project: {
        type: String,
        required: true,
        trim: true
    },
    client: {
        type: String,
        required: true,
        trim: true
    },
    type: {
        type: String,
        default: '-'
    },
    sprint: {
        type: String,
        default: '-'
    },
    task: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    time: {
        type: Number,
        required: true
    }
})

RecordSchema.methods.toJSON = function () {
    let record = this
    let recordObject = record.toObject()

    return _.pick(recordObject, ['alias', 'date', 'project', 'client', 'type', 'sprint', 'task', 'description', 'time'])
}

let Record = mongoose.model('Record', RecordSchema)

module.exports = {
    Record
}
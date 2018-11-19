let mongoose = require('mongoose');

let Record = mongoose.model('Record', {
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

module.exports = {
    Record
}
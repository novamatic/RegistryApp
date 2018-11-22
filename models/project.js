const mongoose = require('mongoose');

let ProjectSchema = new mongoose.Schema({
    project: {
        type: String,
        required: true,
        trim: true
    }
})

let Project = mongoose.model('Project', ProjectSchema)

module.exports = {
    Project
}
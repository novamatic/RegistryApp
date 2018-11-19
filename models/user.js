const mongoose = require('mongoose')
const {SHA256} = require('crypto-js')

let UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    alias: {
        type: String,
        required: true
    },
    priveleged: {
        type: Boolean,
        default: false
    }
})

UserSchema.methods.comparePassword = function(formPassword) {
    let user = this
    let hashedFormPassword = SHA256(formPassword + 'abc123').toString()

    if (user.password === hashedFormPassword) {
        return true
    } else {
        return false
    }
}

UserSchema.pre('save', function(next) {
    let user = this
    let hashedPassword = SHA256(user.password + 'abc123').toString()

    user.password = hashedPassword
    next()
})

let User = mongoose.model('User', UserSchema)

module.exports = {
    User
}
const { mongoose } = require('./db/mongoose')
const { User } = require('./models/user')

let user = new User({
    email: 'jakubhodyl@gmail.com',
    password: 'kuba96',
    alias: 'JHo',
    priveleged: true
})

user.save().then((result) =>
    console.log(result)
).catch((e) => {
    log.console(e)
})
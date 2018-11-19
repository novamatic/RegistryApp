const { mongoose } = require('./db/mongoose')
const { User } = require('./models/user')

let user = new User({
    email: 'jannowak@gmail.com',
    password: 'janek96',
    alias: 'JNo',
    priveleged: false
})

user.save().then((result) =>
    console.log(result)
).catch((e) => {
    log.console(e)
})
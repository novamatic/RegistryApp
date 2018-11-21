const { mongoose } = require('./db/mongoose')
const { User } = require('./models/user')

let user = new User({
    email: 'jankowalski@gmail.com',
    password: 'janek96',
    alias: 'JKo',
    priveleged: false
})

user.save().then((result) =>
    console.log(result)
).catch((e) => {
    log.console(e)
})
// Record.find({alias: "JHo"}).then((docs) => {
//     console.log(docs[0].toJSON())
// }, (err) => {
//     console.log('Unable to fetch Todos', err)
// })

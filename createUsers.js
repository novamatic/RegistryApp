const { mongoose } = require('./db/mongoose')
const { User } = require('./models/user')

const { Project } = require('./models/project')
const { Record } = require('./models/record')
const _ = require('lodash');

// Project.find().then(result => {
//     console.log(result)
// }).catch(err => {
//     console.log(err)
// })
console.log(_.isNull(0))

// User.find().select('alias').then(result => {
//     console.log(result)
// }).catch(err => {
//     console.log(err)
// })

// Record.find({_id: '5bf319461af289a01a3f6e76'}).select('date -_id').then(result => {
//     console.log(result[0].date.getMonth())
// }).catch(err => {
//     console.log(err)
// })
// let user = new User({
//     email: 'jankowalski@gmail.com',
//     password: 'janek96',
//     alias: 'JKo',
//     priveleged: false
// })

// user.save().then((result) =>
//     console.log(result)
// ).catch((e) => {
//     log.console(e)
// })
// Record.find({alias: "JHo"}).then((docs) => {
//     console.log(docs[0].toJSON())
// }, (err) => {
//     console.log('Unable to fetch Todos', err)
// })



// for(let i = 0; i<100; i++) {
//     let record = new Record({
//         "alias" : "JHo",
//         "date" : new Date(),
//         "project" : "EFL",
//         "client" : "OL",
//         "task" : "OL-110",
//         "description" : "Testy jednostkowe",
//         "time" : i,
//         "sprint" : "",
//         "type" : "D",
//     })
//     record.save().then((result) =>{

//     }
//     //console.log(result)
// ).catch((e) => {
//     log.console(e)
// })
// }

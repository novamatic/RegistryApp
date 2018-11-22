const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const flash = require('connect-flash')
const routes = require('./routes/index')
const session = require('express-session')

const app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')
app.use(express.static(path.join(__dirname, 'public')))
app.use('/', express.static('public'));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))
app.use(cookieParser())

app.use(session({
    alias: '',
    loggedIn: false,
    priveleged: false,
    secret: 'somesecret',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 900000 }
  }))

app.use(flash())



app.use('/', routes)

module.exports = app

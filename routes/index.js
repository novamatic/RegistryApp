const express = require('express')
const router = express.Router()
const formController = require('./../controllers/formController')
const loginController = require('./../controllers/loginController')

router.get('/', (req, res) => {
    res.render('login');
});

router.get('/home', (req, res) => {
    res.render('home');
});

router.get('/form', (req, res) => {
    res.render('form');
});

router.get('/analysis', (req, res) => {
    res.render('analysis');
});

router.post('/form', formController.saveForm)

router.post('/', loginController.loginForm)

module.exports = router;
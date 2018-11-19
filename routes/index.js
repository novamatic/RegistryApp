const express = require('express')
const router = express.Router()
const formController = require('./../controllers/formController')
const loginController = require('./../controllers/loginController')

router.get('/', (req, res) => {
    if (req.session.loggedIn) {
        return res.redirect('/home')
    }
    res.render('login');
});

router.get('/logout', (req, res, next) => {
    if (req.session) {
        req.session.destroy(err => {
          if(err) {
            return next(err);
          } else {
            return res.redirect('/');
          }
        });
    }
});

router.get('/home', (req, res) => {
    if (!req.session.loggedIn) {
        return res.redirect('/')
    }
    res.render('home')
});

router.get('/form', (req, res) => {
    if (!req.session.loggedIn) {
        return res.redirect('/')
    }
    res.render('form');
});

router.get('/analysis', (req, res) => {
    if (!req.session.loggedIn) {
        return res.redirect('/')
    }
    if (!req.session.priveleged) {
        return res.redirect('/home')
    }
    res.render('analysis');
});

router.post('/form', formController.saveForm)

router.post('/', loginController.loginForm)

module.exports = router;
const express = require('express')
const router = express.Router()
const formController = require('./../controllers/formController')
const loginController = require('./../controllers/loginController')
const homeController = require('./../controllers/homeController')
const formDeleteController = require('./../controllers/formDeleteController');
const formEditController = require('./../controllers/formEditController');
const analyseController = require('./../controllers/analyseController');

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

router.get('/home', homeController.homeControl)

router.get('/form', (req, res) => {
    if (!req.session.loggedIn) {
        return res.redirect('/')
    }
    res.render('form');
});

router.get('/formd', formDeleteController.deleteControl)

router.get('/forme', formEditController.editControl)

router.get('/analysis', analyseController.analyseController)

router.post('/analysis', analyseController.analyseTable)

router.post('/form', formController.saveForm)

router.post('/formedit', formEditController.updateForm)

router.post('/', loginController.loginForm)

module.exports = router;
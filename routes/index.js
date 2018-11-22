const express = require('express')
const router = express.Router()
const formController = require('./../controllers/formController')
const loginController = require('./../controllers/loginController')
const homeController = require('./../controllers/homeController')
const formDeleteController = require('./../controllers/formDeleteController');
const formEditController = require('./../controllers/formEditController');
const analyseController = require('./../controllers/analyseController');
const mailController = require('./../controllers/mailController');
const logoutController = require('./../controllers/logoutController');

router.get('/', loginController.loginControl);

router.get('/logout', logoutController.logoutControl);

router.get('/home', homeController.homeControl)

router.get('/form', formController.formControl);

router.get('/formd', formDeleteController.deleteControl)

router.get('/forme', formEditController.editControl)

router.get('/analysis', analyseController.analyseController)

router.post('/analysis', analyseController.analyseTable)

router.post('/mail', mailController.mailControl)

router.post('/form', formController.saveForm)

router.post('/formedit', formEditController.updateForm)

router.post('/', loginController.loginForm)

module.exports = router;
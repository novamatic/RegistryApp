const session = require('express-session')
const { app } = require('./../app');

logoutControl = (req, res, next) => {
    if (req.session) {
        req.session.destroy(err => {
          if(err) {
            return next(err);
          } else {
            return res.redirect('/');
          }
        });
    }
}

module.exports = {
    logoutControl
}
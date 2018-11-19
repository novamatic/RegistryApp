let authenticate = (req, res, next) => {
    if (req.session.loggedIn) {
        next()
    } else {
        res.redirect('/')
    }
}

module.exports = {
    authenticate
}
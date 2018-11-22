const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'registry.app.noreply@gmail.com',
        pass: 'cde3$RFV'
    },
    tls: { rejectUnauthorized: false }
})

module.exports = {
    transporter
}
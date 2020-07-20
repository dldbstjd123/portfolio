var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer')
var config = require('../ignore/config.js')

/* GET home page. */
router.post('/', async function (req, res, next) {
    console.log(req.body.name)
    console.log(req.body.email)
    console.log(req.body.message)
    console.log(config.emailConfig)

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: config.emailConfig
    });
    let mailOptions = {
        from: 'lys941121@gmail.com',
        to: req.body.email,
        subject: 'Yoon Jung',
        html: `<h1>Hello ${req.body.name}, </h1><p>Thank you for contacting me! I will reach out to you within 2 business days.</p>`
    };
    let sentStatus1 = await transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error)
            res.json({ status: 'failed' })
            return 0
        } else {
            return 1
        }
    })
    mailOptions = {
        from: 'lys941121@gmail.com',
        to: 'lys941121@gmail.com',
        bcc: 'dannydannyl@me.com',
        subject: 'yo0on.com contact email',
        replyTo: req.body.email,
        html: `<h1> ${req.body.name} has sent you a message</h1><p>Message: ${req.body.message}</p>`
    };
    let sentStatus2 = await transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error)
            res.json({ status: 'failed' })
            return 0
        } else {
            return 1
        }
    })
    if (sentStatus1 == 1 && sentStatus2 == 1) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Controll-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.json({ status: 'succeed' });
    }
});

module.exports = router;

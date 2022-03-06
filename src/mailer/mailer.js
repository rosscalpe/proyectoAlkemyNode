const { nodemailer } = require('nodemailer');

const mailConfig = nodemailer.createTransport({
            host:'rossmy.hotmail.com',
            port: 465,
            auth: {
                user: process.env.ethereal_user,
                pass: process.env.ethereal_pwd
            }  
})

module.exports = { mailConfig };
const nodemailer = require('nodemailer');
const sgTransport = require('nodemailer-sendgrid-transport');

const mailConfig;
    if(process.env.NODE_ENV === 'production'){
        const options = {
            auth: {
                api_key: process.env.SENDGRID_API_KEY
            }
        }
        mailConfig = sgTransport(options);
    } else {
        if(process.env.NODE_ENV === 'staging'){
            console.log('XXXXXXXXXXXXXXXXXXX');
            const options = {
                auth: {
                    api_key: process.env.SENDGRID_API_KEY
                }
            }
            mailConfig = sgTransport(options);
        } else {
            mailConfig = {
                host:'',
                port: 3000,
                auth: {
                    user: process.env.ethereal_user,
                    pass: process.env.ethereal_pwd
                }
            }
        }
    }

module.exports = nodemailer.createTransport(mailConfig);
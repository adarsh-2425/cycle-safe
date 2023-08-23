const nodemailer = require('nodemailer');

//Nodemailer
//transporter configuration
const transporter = nodemailer.createTransport({
  host: "smtppro.zoho.in",
  port: 465,
  secure: true,
  auth: {
    user: process.env.email,
    pass: process.env.password //use application specific password from zoho
  },
  tls:{
      rejectUnauthorized:false
    }
});

module.exports = transporter;
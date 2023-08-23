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

//signup success mail
exports.signupSuccess = (email) => {
  const mailOptions = {
    from: '"Cycle Safe" <' + process.env.email + '>',
    to: email,
    subject: "Account Created Successfully",
    text: `Welcome to Cycle Safe. Empowering Cyclists with SOS and Peace of Mind.`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Error sending email: ", error);
    } else {
      console.log("Email sent: ", info.response);
    }
  });
};
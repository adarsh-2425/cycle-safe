//two routes
//signin and signup
//use nodemailer to send when signin and signup happens
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

//signup route
router.post('/signup', authController.signup);

//signin route
router.post('/signin', authController.signin);

module.exports = router;
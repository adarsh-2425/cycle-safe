//two routes
//signin and signups
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

//signup route
router.post('/signup', authController.signup);

//signin route
router.post('/signin', authController.signin);


module.exports = router;
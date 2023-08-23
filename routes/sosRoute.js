const express = require('express');
const router = express.Router();
const sosController = require('../controllers/sosController');
const jwtAuthMiddleware = require('../middlewares/jwtAuth');

//sos route
router.post('/sos', jwtAuthMiddleware, sosController.sos)

module.exports = router;
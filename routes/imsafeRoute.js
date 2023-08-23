const express = require('express');
const router = express.Router();

const jwtAuthMiddleware = require('../middlewares/jwtAuth')
const imsafeController = require('../controllers/imsafeController');


//imsafe route
router.post('/:relationship', jwtAuthMiddleware, imsafeController.imsafe);

module.exports = router;
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// get all users
router.get('/', userController.getAllUsers);

//getuserbyid
router.get('id/:id', userController.getUserById);

// update user
router.put('/update/:id', userController.updateUserById)

//delete user
router.delete('/delete/:id', userController.deleteUserById);

module.exports = router;
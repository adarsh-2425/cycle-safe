const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

//getuserbyid
router.get('/:id', userController.getUserById);

// get all users
router.get('/all', userController.getAllUsers);

// update user
router.put('/update/:id', userController.updateUserById)

//delete user
router.delete('/delete/:id', userController.deleteUserById);

module.exports = router;
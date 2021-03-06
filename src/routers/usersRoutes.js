const express = require('express');

const userController = require('../controllers/userController');

const router = express.Router();

router.post('/createUser', userController.createUser);

router.put('/updateUser/:id', userController.updateUser);

router.delete('/delete/:id', userController.excludeUser);

router.get('/:id', userController.getUser);

router.get('/', userController.getAllUsers);

module.exports = router;
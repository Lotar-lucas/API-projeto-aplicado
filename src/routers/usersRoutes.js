const express = require('express');

const userController = require('../controllers/studentController');

const router = express.Router();

router.post('/createUser', userController.createUser);

router.put('/updateUser', userController.updateUser);

router.delete('/delete', userController.excludeUser);

router.get('/:id', userController.getUser);

router.get('/', userController.getAllStudents);

module.exports = router;
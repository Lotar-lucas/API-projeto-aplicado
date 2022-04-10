const express = require('express');

const studentController = require('../controllers/studentController');

const router = express.Router();

router.post('/:RA', studentController.createStudent);

// router.put('/', studentController.editStudent);

// router.delete('/:', studentController.excludeStudent);

router.get('/', studentController.getAllStudents);
module.exports = router;
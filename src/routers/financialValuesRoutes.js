const express = require('express');

const financialValuesController = require('../controllers/financialValuesController');

const router = express.Router();


//controle entrada de dinheiro
router.post('/addCapital/:id', financialValuesController.addCapital);
router.put('/updateCapital/:id', financialValuesController.updateCapital);


//all
router.get('/getInfosFinancialUser/:id', financialValuesController.getAll);
// router.get('/getAllInfosFinancial', financialValuesController.getAllInfosFinancial);

module.exports = router;
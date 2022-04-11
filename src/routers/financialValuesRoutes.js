const express = require('express');

const financialValuesController = require('../controllers/studentController');

const router = express.Router();


//controle entrada de dinheiro
router.post('/addCapital', financialValuesController.addCapital);
router.put('/updateCapital', financialValuesController.updateCapital);


//controle saida de dinheiro
router.post('/addExpense', financialValuesController.addExpense);
router.put('/updateExpense', financialValuesController.updateExpense);


//adiciona entrada de quantidade de investimentos
router.post('/addForInvestments', financialValuesController.addForInvestments);
router.post('/updateForInvestments', financialValuesController.updateForInvestments);


//adiciona ou atualiza  o total no momento [ controlado por camada de service ]
// router.post('/addTotalMonth', financialValuesController.addTotalMonth);


//remuneration
router.post('/addRemuneration', financialValuesController.addRemuneration);
router.put('/updateRemuneration', financialValuesController.addRemuneration);

//all
router.get('/getInfosFinancialUser/:id', financialValuesController.getInfosFinancialUser);
router.get('/getAllInfosFinancial', financialValuesController.getAllInfosFinancial);

module.exports = router;
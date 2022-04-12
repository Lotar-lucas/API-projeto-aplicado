const {
  StatusCodes
} = require('http-status-codes');
const financialModels = require('../models/financialModels');

// const { regexValidEmail } = require('../validations/regexValidEmail');
// const { isValidStudentData } = require('../validations/isValidStudentData');
// const { isValidRa } = require('../validations/isValidRa');
const {
  transformToLowerCaseFinancial
} = require('../helpers/transformToLowerCaseFinancial');

const getUser = async (id) => {
  return await financialModels.getUser(id)
};

const addInfosFinancial = async (id, financialData) => {

  const {
    moneyEntry = 0,
      moneyOut = 0,
      moneyTotal = 0,
      investments = 0,
      remuneration = 0
  } = financialData;


  await financialModels.addFinancial(
    moneyEntry,
    moneyOut,
    moneyTotal,
    investments,
    remuneration,
    id
  );

  return {
    isError: false,
    message: 'created information'
  };
};


const updateInfosFinancial = async (id, financialData) => {

  const {
    moneyEntry = 0,
      moneyOut = 0,
      moneyTotal = 0,
      investments = 0,
      remuneration = 0
  } = financialData;

  await financialModels.edit(
    moneyEntry,
    moneyOut,
    moneyTotal,
    investments,
    remuneration,
    id
  );

  return {
    isError: false,
    message: 'edited successfully'
  };
};


module.exports = {
  addInfosFinancial,
  getUser,
  updateInfosFinancial
};
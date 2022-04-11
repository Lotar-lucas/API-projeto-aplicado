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

const getAll = async (id) => {
  const dataFinancialUser = await financialModels.getAll();
  return {
    financialAllData: [...dataFinancialUser]
  };
};

const addInfosFinancial = async (id, financialData) => {

  const {
    moneyEntry = 0,
      moneyOut = 0,
      moneyTotal = 0,
      investments = 0,
      remuneration = 0
  } = await transformToLowerCaseFinancial(financialData);


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
  } = await transformToLowerCase(financialData);

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
  getAll,
  updateInfosFinancial
};
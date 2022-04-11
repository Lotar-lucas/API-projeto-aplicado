const transformToLowerCaseFinancial = async (financialData) => {
  const ArrayLowerCase = Object.values(financialData).map((element) => element.toLowerCase());
  return {
    moneyEntry: ArrayLowerCase[0],
    moneyOut: ArrayLowerCase[1],
    moneyTotal: ArrayLowerCase[2],
    investments: ArrayLowerCase[3],
    remuneration: ArrayLowerCase[4]
  };
};

module.exports = {
  transformToLowerCaseFinancial
};
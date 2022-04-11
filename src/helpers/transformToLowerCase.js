const transformToLowerCase = async (userData) => {
  const ArrayLowerCase = Object.values(userData).map((element) => element.toLowerCase());
  return {
    name: ArrayLowerCase[0],
    age: ArrayLowerCase[1],
    cpf: ArrayLowerCase[2],
    email: userData.email,
    phone_number: ArrayLowerCase[3],
    data_excluded: ArrayLowerCase[4] ? ArrayLowerCase[4] : null,
    was_excluded: ArrayLowerCase[5] ? ArrayLowerCase[5] : 0
  };
};

module.exports = {
  transformToLowerCase
};
const {
  StatusCodes
} = require('http-status-codes');
const usersModels = require('../models/usersModels');

// const { regexValidEmail } = require('../validations/regexValidEmail');
// const { isValidStudentData } = require('../validations/isValidStudentData');
// const { isValidRa } = require('../validations/isValidRa');
const {
  transformToLowerCase
} = require('../helpers/transformToLowerCase');

const getAll = async () => {
  const users = await usersModels.getAll();
  return {
    usersAllData: [...users]
  };
};

const createUser = async (ra, userData) => {
  // if (isValidStudentData(studentData).isError) return isValidStudentData(studentData);
  // if (isValidRa(ra).isError) return isValidRa(ra);
  // if (regexValidEmail(studentData).isError) return regexValidEmail(studentData);

  const {
    name,
    age,
    cpf,
    email,
    phone_number,
    data_excluded,
    was_excluded
  } = await transformToLowerCase(userData);


  await usersModels.createPersona(
    name,
    age,
    cpf,
    email,
    phone_number,
    data_excluded,
    was_excluded
  );

  return {
    isError: false,
    message: 'Student created successfully'
  };
};

const editUser = async (userId, userData) => {

  const {
    usersAllData
  } = await getAll();

  const userAlreadyExists = usersAllData.some((student) => student.user_id === Number(userId.id));

  if (!userAlreadyExists) return {
    isError: true,
    message: 'User does not exist',
    code: StatusCodes.CONFLICT
  };

  const {
    id
  } = userId;


  const {
    name,
    age,
    cpf,
    email,
    phone_number,
    data_excluded,
    was_excluded,
  } = await transformToLowerCase(userData);

  await usersModels.edit(
    name,
    age,
    cpf,
    email,
    phone_number,
    data_excluded,
    was_excluded,
    id
  );

  return {
    isError: false,
    message: 'User edited successfully'
  };
};

const excludeStudent = async (userId) => {
  const numberOfLinesAffectedInCaseOfError = 0;
  // if (isValidRa(ra).isError) return isValidRa(ra);

  const {
    id
  } = userId;

  const [result] = await usersModels.exclude(id);

  // if the student doesn't exist
  if (result.affectedRows === numberOfLinesAffectedInCaseOfError) return {
    isError: true,
    message: 'User does not exist'
  };
  return {
    isError: false,
    message: 'User successfully deleted'
  };
};

module.exports = {
  createUser,
  getAll,
  editUser,
  excludeStudent,
};
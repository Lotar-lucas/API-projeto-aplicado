const {
  StatusCodes
} = require('http-status-codes');
const usersModels = require('../models/usersModels');

// const { regexValidEmail } = require('../validations/regexValidEmail');
// const { isValidStudentData } = require('../validations/isValidStudentData');
// const { isValidRa } = require('../validations/isValidRa');
const transformToLowerCase = require('../helpers/transformToLowerCase.js');

const getAll = async () => {
  const users = await usersModels.getAll();
  return {
    usersAllData: [...users]
  };
};

const getUserId = async (id) => {
  return await usersModels.getUserId(id);
};

const createUser = async (userData) => {

  const {
    name,
    age,
    cpf,
    email,
    phone_number,
    data_excluded,
    was_excluded
  } = userData;


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

  const userAlreadyExists = usersAllData.some((user) => user.user_id === Number(userId));


  if (!userAlreadyExists) return {
    isError: true,
    message: 'User does not exist',
    code: StatusCodes.CONFLICT
  };

  const {
    name,
    age,
    cpf,
    email,
    phone_number,
    data_excluded,
    was_excluded,
  } = userData;


  const a = await usersModels.edit(
    name,
    age,
    cpf,
    email,
    phone_number,
    data_excluded,
    was_excluded,
    Number(userId)
  );

  return {
    isError: false,
    message: 'User edited successfully'
  };
};

const excludeStudent = async (userId) => {
  const numberOfLinesAffectedInCaseOfError = 0;

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
  getUserId
};
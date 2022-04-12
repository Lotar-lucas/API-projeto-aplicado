const {
  StatusCodes
} = require('http-status-codes');
const usersServices = require('../services/usersServices');


const getAllUsers = async (_req, res) => {
  try {

    const students = await usersServices.getAll();

    return res.status(StatusCodes.OK).json(students);
  } catch (error) {

    return res.status(500).json({
      error: error.message
    });
  }
};

const getUser = async (req, res) => {
  try {

    const students = await usersServices.getUserId(req.params.id);

    return res.status(StatusCodes.OK).json(students);
  } catch (error) {

    return res.status(500).json({
      error: error.message
    });
  }
};

const createUser = async (req, res) => {
  try {


    const response = await usersServices.createUser(req.body);

    if (response.isError) {

      return res.status(response.code).json({
        message: response.message
      });
    }

    return res.status(StatusCodes.CREATED).json({
      message: response.message
    });

  } catch (error) {
    return res.status(500).json({
      error: error.message
    });
  }
};

const updateUser = async (req, res) => {

  try {

    const response = await usersServices.editUser(req.params.id, req.body);

    if (response.isError) {
      return res.status(response.code).json({
        message: response.message
      });
    }

    return res.status(StatusCodes.OK).json({
      message: response.message
    });

  } catch (error) {

    return res.status(500).json({
      error: error.message
    });
  }
};

const excludeUser = async (req, res) => {

  try {

    const response = await usersServices.excludeStudent(req.params);

    if (response.isError) {

      return res.status(response.code).json({
        message: response.message
      });
    }

    return res.status(StatusCodes.OK).json({
      message: response.message
    });

  } catch (error) {

    return res.status(500).json({
      error: error.message
    });

  }
};

module.exports = {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  excludeUser
};
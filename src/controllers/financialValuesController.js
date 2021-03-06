const {
  StatusCodes
} = require('http-status-codes');
const financialValuesServices = require('../services/financialValuesServices');


const addAndUpdateCapital = async (req, res) => {
  try {

    const response = await financialValuesServices.addInfosFinancial(req.params.id, req.body);

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


// const updateCapital = async (req, res) => {

//   try {

//     const response = await financialValuesServices.updateInfosFinancial(req.params.id, req.body);

//     if (response.isError) {
//       return res.status(response.code).json({
//         message: response.message
//       });
//     }

//     return res.status(StatusCodes.OK).json({
//       message: response.message
//     });

//   } catch (error) {

//     return res.status(500).json({
//       error: error.message
//     });
//   }
// };

const getUser = async (req, res) => {
  try {

    const response = await financialValuesServices.getUser(req.params.id);

    if (response.isError) {
      return res.status(response.code).json({
        message: response.message
      });
    }

    return res.status(StatusCodes.OK).json(response);

  } catch (error) {

    return res.status(500).json({
      error: error.message
    });
  }
}


module.exports = {
  addAndUpdateCapital,
  getUser,
  // updateCapital
};
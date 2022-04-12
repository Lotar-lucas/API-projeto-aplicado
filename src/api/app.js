const express = require('express');
const bodyParser = require('body-parser');

const usersRoutes = require('../routers/usersRoutes');
const financialValuesRoutes = require('../routers/financialValuesRoutes');

const cors = require('cors');

const app = express();

const corsOptions = {
  origin: 'http://localhost:8080',
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use('/users', usersRoutes);
app.use('/financialValuesRoutes', financialValuesRoutes);

module.exports = app;
const express = require('express');
const bodyParser = require('body-parser');

const cors = require('cors');

const app = express();

const corsOptions = {
  origin: 'http://localhost:8080',
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

// app.use('/students', studentsRoutes);

module.exports = app;
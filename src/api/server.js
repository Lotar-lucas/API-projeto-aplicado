require('dotenv').config();
const app = require('./app');

const {
  PORT
} = process.env;

app.listen(3001, () => console.log('Rodando na porta 3001'));
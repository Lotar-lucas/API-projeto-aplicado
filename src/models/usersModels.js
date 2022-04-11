const connectionFactory = require('./connectionFactory');
const schema = require('./schema');

const createPersona = async (
  name,
  age,
  cpf,
  email,
  phone_number,
  data_excluded,
  was_excluded
) => {

  const connection = schema.connectionMySQL;

  connectionFactory()

  return connectionFactory(connection)
    .execute(`INSERT INTO ${connection.database}.user(name_user,age,cpf,email,phone_number,data_excluded,was_excluded) VALUES (?,?,?,?,?,?,?)`,
      [name, age, cpf, email, phone_number, data_excluded, was_excluded]);
};

const edit = async (
  name,
  age,
  cpf,
  email,
  phone_number,
  data_excluded,
  was_excluded,
  id
) => {

  const connection = schema.connectionMySQL;

  return connectionFactory(connection)
    .execute('UPDATE user SET name_user=?, age=?, email=?, cpf=?, email=?, phone_number=?, data_excluded=?, was_excluded=? WHERE user_id =?', [name, age, cpf, email, phone_number, data_excluded, was_excluded, id]);
};

const getAll = async () => {
  const connection = schema.connectionMySQL;
  const [result] = await connectionFactory(connection)
    .execute(`SELECT * FROM ${connection.database}.user`);
  return result;
};

const exclude = async (id) => {
  const date = new Date();

  const dateStr =
    ("00" + date.getDate()).slice(-2) + "/" +
    ("00" + (date.getMonth() + 1)).slice(-2) + "/" +
    date.getFullYear() + ' ' +
    ("00" + date.getHours()).slice(-2) + ":" +
    ("00" + date.getMinutes()).slice(-2) + ":" +
    ("00" + date.getSeconds()).slice(-2);


  const connection = schema.connectionMySQL;
  return connectionFactory(connection)
    .execute(`UPDATE user SET data_excluded=?, was_excluded=? FROM ${connection.database}.user WHERE user_id =?`, [dateStr, 0, id]);
};



module.exports = {
  createPersona,
  getAll,
  exclude,
  edit,
};
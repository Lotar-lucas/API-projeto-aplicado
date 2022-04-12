const {
  use
} = require('../routers/usersRoutes');
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

  const result = await connectionFactory(connection)
    .execute(`INSERT INTO ${connection.database}.user(name_user,age,cpf,email,phone_number,data_excluded,was_excluded) VALUES (?,?,?,?,?,?,?)`,
      [name, age, cpf, email, phone_number, data_excluded, was_excluded]);


  const arrayUsers = await getAll()

  const {
    user_id
  } = arrayUsers.find(user => user.cpf === cpf)

  await connectionFactory(connection).execute(`INSERT INTO ${connection.database}.monetary_information(user_id) VALUES (?)`, [user_id]);

  return result
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

  const a = await connectionFactory(connection)
    .execute(`UPDATE user SET name_user=?,age=?,cpf=?,email=?,phone_number=?,data_excluded=?,was_excluded=? WHERE user_id=${id}`, [name, age, cpf, email, phone_number, data_excluded, was_excluded]);

  console.log(a)
  return a
};

const getAll = async () => {
  const connection = schema.connectionMySQL;

  const [result] = await connectionFactory(connection)
    .execute(`SELECT * FROM ${connection.database}.user`);

  return result;
};

const getUserId = async (id) => {
  const connection = schema.connectionMySQL;

  const [result] = await connectionFactory(connection)
    .execute(`SELECT * FROM ${connection.database}.user WHERE user_id=${id}`);

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
  return await connectionFactory(connection)
    .execute(`UPDATE user SET data_excluded=?, was_excluded=? WHERE user_id =${id}`, [dateStr, 1]);
};



module.exports = {
  createPersona,
  getAll,
  exclude,
  edit,
  getUserId
};
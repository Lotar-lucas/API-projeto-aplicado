const connectionFactory = require('./connectionFactory');
const schema = require('./schema');

const usersServices = require('../services/usersServices');


const addFinancial = async (
  moneyEntry,
  moneyOut,
  moneyTotal,
  investments,
  remuneration,
  id
) => {

  const result = await getAll(id);

  const {
    user_id
  } = result.find((user) => user.user_id === Number(id));

  console.log(result)
  if (!user_id) {
    const connection = schema.connectionMySQL;

    return connectionFactory(connection)
      .execute(`INSERT INTO ${connection.database}.monetary_information(money_entry,money_out,money_total,investments,remuneration) VALUES (?,?,?,?,?) `,
        [moneyEntry, moneyOut, moneyTotal, investments, remuneration]);

  } else {

    const connection = schema.connectionMySQL;

    return connectionFactory(connection)
      .execute(`UPDATE monetary_information SET money_entry=?, money_out=?,money_total=? ,investments=?,remuneration=? WHERE user_id=?`, [moneyEntry, moneyOut, moneyTotal, investments, remuneration, id]);
  }
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

const getUser = async (id) => {
  const connection = schema.connectionMySQL;
  const [result] = await connectionFactory(connection)
    .execute(`SELECT * FROM ${connection.database}.monetary_information WHERE user_id=${id}`);
  return result;
};

module.exports = {
  addFinancial,
  getUser,
  edit,
};
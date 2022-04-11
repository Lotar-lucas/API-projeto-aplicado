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

  const {
    usersAllData
  } = await getAll();

  const userAlreadyExists = usersAllData.some((student) => student.user_id === Number(id));

  if (!userAlreadyExists) {
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

const getAll = async (id) => {
  const connection = schema.connectionMySQL;
  const [result] = await connectionFactory(connection)
    .execute(`SELECT * FROM ${connection.database}.monetary_information WHERE user_id=?`, [id]);
  return result;
};

// const exclude = async (id) => {
//   const date = new Date();

//   const dateStr =
//     ("00" + date.getDate()).slice(-2) + "/" +
//     ("00" + (date.getMonth() + 1)).slice(-2) + "/" +
//     date.getFullYear() + ' ' +
//     ("00" + date.getHours()).slice(-2) + ":" +
//     ("00" + date.getMinutes()).slice(-2) + ":" +
//     ("00" + date.getSeconds()).slice(-2);


//   const connection = schema.connectionMySQL;
//   return connectionFactory(connection)
//     .execute(`UPDATE user SET data_excluded=?, was_excluded=? FROM ${connection.database}.user WHERE user_id =?`, [dateStr, 0, id]);
// };



module.exports = {
  createPersona,
  getAll,
  exclude,
  edit,
};
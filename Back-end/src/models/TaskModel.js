const connection = require('./connection');

const getAll = async () => {
  const [result] = await connection.execute('SELECT * FROM Blitz.task');
  return result;
};

const taskOrdered = async () => {
  const [result] = await connection.execute('SELECT * FROM Blitz.task ORDER BY task');
  return result;
};

const statusOrdered = async () => {
  const [result] = await connection.execute('SELECT * FROM Blitz.task ORDER BY status');
  return result;
};

const create = async (task) => {
  const [result] = await connection.execute('INSERT INTO Blitz.task (task) VALUES (?);', [task]);
  console.log(result);
  return { id: result.insertId, task, status: 'Pendente' };
};

const remove = async (id) => {
  const [result] = await connection.execute('DELETE FROM Blitz.task WHERE id = ?;', [id]);
  return result;
};

const updateTask = async (id, task) => {
  await connection.execute(`UPDATE Blitz.task 
  SET task = ?
  WHERE id = ?;`, [task, id]);
  return 'Updated';
};

const updateStatus = async (id, status) => {
  await connection.execute(`UPDATE Blitz.task 
  SET status = ?
  WHERE id = ?;`, [status, id]);
  return 'Updated!';
};

module.exports = {
  getAll,
  taskOrdered,
  statusOrdered,
  create,
  remove,
  updateTask,
  updateStatus,
};

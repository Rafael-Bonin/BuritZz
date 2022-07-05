const models = require('../models/TaskModel');

const getAll = async () => {
  const result = await models.getAll();
  return result;
};

const taskOrdered = async () => {
  const result = await models.taskOrdered();
  return result;
};

const statusOrdered = async () => {
  const result = await models.statusOrdered();
  return result;
};

const create = async (task) => {
  if (task.length > 200) throw { status: 409, message: 'As tasks devem possuir ate 200 caracteres' };
  const result = await models.create(task);
  return result;
};

const remove = async (id) => {
  const result = await models.remove(id);
  return result;
};

const updateTask = async (id, task) => {
  const all = await models.getAll();
  const exists = all.some((t) => t.id === id);
  if (!exists) throw { status: 404, message: 'a task with "id" doesnt exist' };
  const result = await models.updateTask(id, task);
  return result;
};

const updateStatus = async (id, status) => {
  const all = await models.getAll();
  const exists = all.some((t) => t.id === id);
  if (!exists) throw { status: 404, message: 'a task with "id" doesnt exist' };
  const result = await models.updateStatus(id, status);
  console.log(result);
  return result;
};

module.exports = {
  getAll,
  statusOrdered,
  taskOrdered,
  create,
  remove,
  updateTask,
  updateStatus,
};

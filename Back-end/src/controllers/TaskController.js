const services = require('../services/TaskService');

const getAll = async (req, res, next) => {
  try {
    const { query } = req;
    let result = await services.getAll();
    if (query.order === 'task') result = await services.taskOrdered();
    if (query.order === 'status') result = await services.statusOrdered();
    return res.status(200).json(result);
  } catch (err) { 
    return next(err);
  }
};

const create = async (req, res, next) => {
  try {
    const { body: { task } } = req;
    const result = await services.create(task);
    return res.status(201).json(result);
  } catch (err) {
    return next(err);
  }
};

const remove = async (req, res, next) => {
  try {
    const { body: { id } } = req;
    const result = await services.remove(id);
    return res.status(204).json(result);
  } catch (err) {
    return next(err);
  }
};

const update = async (req, res, next) => {
  try {
    const { body: { id, task, status }, query } = req;
    console.log(query.type);
    if (query.type === 'task') await services.updateTask(id, task);
    if (query.type === 'status') await services.updateStatus(id, status);
    return res.status(204).end();
  } catch (err) {
    return next(err);
  }
};

module.exports = {
  getAll,
  create,
  remove,
  update,
};

import axios from 'axios';

const URL = 'http://localhost:3000/';

const readAllTask = async () => {
  try {
    const result = await axios.get(URL);
    return result.data;
  } catch (error) {
    return error;
  }
};

const taskOrdered = async () => {
  try {
    const result = await axios.get(`${URL}?order=task`);
    return result.data;
  } catch (error) {
    return error;
  }
};

const statusOrdered = async () => {
  try {
    const result = await axios.get(`${URL}?order=status`);
    return result.data;
  } catch (error) {
    return error;
  }
};

const create = async () => {
  try {

  } catch (error) {

  }
};

export default {
  readAllTask,
  statusOrdered,
  taskOrdered,
  create,
};

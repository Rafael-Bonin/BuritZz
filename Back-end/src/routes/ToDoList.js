const express = require('express');
const controller = require('../controllers/TaskController');
const errMdw = require('../middlewares/TaskErrMdw');

const listRouter = express.Router();

listRouter.get('/', controller.getAll);
listRouter.post('/', errMdw.testTask, controller.create);
listRouter.delete('/', controller.remove);
listRouter.put('/', controller.update);

module.exports = listRouter;

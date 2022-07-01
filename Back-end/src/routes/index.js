const express = require('express');
const list = require('./ToDoList');

const Router = express.Router();

Router.use('/', list);

module.exports = Router;

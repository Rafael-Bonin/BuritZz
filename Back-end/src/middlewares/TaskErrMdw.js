const joi = require('joi');

const validateTask = joi.object({
  task: joi.required(),
});

const testTask = (req, _res, next) => {
  const { body: { task } } = req;
  const { error } = validateTask.validate({ task });
  if (error) next({ status: 400, message: error.message });
  next();
};

const validateStatus = joi.object({
  status: joi.string().required(),
});

const testStatus = (req, _res, next) => {
  const { body: { status } } = req;
  const { error } = validateStatus.validate({ status });
  if (error) next({ status: 400, message: error.message });
  next();
};

module.exports = { testTask, testStatus };

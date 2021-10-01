const Joi = require('joi');

const loginVerify = Joi.object({
  fullName: Joi.string().required(),
  birthDate: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  country: Joi.string().required(),
}).messages({
  'string.required': '{#label} is required',
  'email.required': '{#label} is required',
});

module.exports = loginVerify;

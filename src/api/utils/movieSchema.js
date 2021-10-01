const Joi = require('joi');

const movieVerify = Joi.object({
  title: Joi.string().required(),
  subtitle: Joi.string().required(),
  storyline: Joi.string().required(),
  rating: Joi.number().integer().min(0).max(10)
    .required(),
  genre: Joi.string().required(),
}).messages({
  'string.required': '{#label} is required',
  'number.required': '{#label} is required',
  'number.min': '{#label} should have a minimum rating of {#limit}',
  'number.max': '{#label} should have a max rating of {#limit}',
});

module.exports = movieVerify;

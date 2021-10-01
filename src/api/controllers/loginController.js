const rescue = require('express-rescue');
const loginVerify = require('../utils/loginSchema');
const { postUser } = require('../service/loginService');

const login = rescue(async (req, res, next) => {
  const { error } = loginVerify.validate(req.body);
  if (error) next(error);
  await postUser(req.body);
  res.status(200).json({ message: 'login create success' });
});

module.exports = { login };

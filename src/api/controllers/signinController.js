const rescue = require('express-rescue');
const jwt = require('jsonwebtoken');
const signinVerify = require('../utils/signinSchema');
const { signinUser } = require('../service/signinService');

const signin = rescue(async (req, res, next) => {
  const { error } = signinVerify.validate(req.body);
  if (error) next(error);
  const {
    email, password, role, id,
  } = await signinUser({ ...req.body });
  const payload = {
    email, password, role, id,
  };
  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1d' });
  return res.status(200).json(token);
});

module.exports = { signin };

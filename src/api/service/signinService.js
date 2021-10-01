const boom = require('@hapi/boom');
const { User } = require('../../../models');

const signinUser = async ({ email, password }) => {
  const signin = await User.findOne({ where: { email } });
  if (!signin || signin.password !== password) {
    throw boom.badRequest('Invalid data');
  }
  return signin;
};
module.exports = { signinUser };

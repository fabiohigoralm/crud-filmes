const { User } = require('../../../models');

const postUser = async ({
  fullName, birthDate, email, password, country,
}) => {
  const createUser = await User.create({
    fullName, birthDate, email, password, country, role: 'user',
  });
  return createUser;
};

module.exports = { postUser };

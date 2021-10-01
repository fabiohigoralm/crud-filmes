const boom = require('@hapi/boom');
const { User } = require('../../../models');

const findAll = async () => {
  const allUsers = await User.findAll();
  return allUsers;
};
const findById = async (_id) => {
  const user = await User.findOne({ where: { id: _id } });
  if (!user) throw boom.notFound('User does not exist');
  const {
    id, fullName, birthDate, email, password,
  } = user;
  return {
    id, fullName, birthDate, email, password,
  };
};

const editProfile = async ({
  id, fullName, birthDate, email, password,
}) => {
  await User.update({
    fullName, birthDate, email, password,
  }, { where: { id } });
  const profileEdited = await findById(id);
  return profileEdited;
};
const editProfileAdm = async ({
  id, fullName, birthDate, email, password, role, country,
}) => {
  await User.update({
    fullName, birthDate, email, password, role, country,
  }, { where: { id } });
  const user = await User.findOne({ where: { id } });
  return user;
};
const deleteProfile = async (id) => {
  const deleteUser = await User.destroy({ where: { id } });
  return deleteUser;
};

module.exports = {
  findAll, findById, editProfile, editProfileAdm, deleteProfile,
};

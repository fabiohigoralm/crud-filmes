const boom = require('@hapi/boom');
const rescue = require('express-rescue');
const {
  findAll, findById, editProfile, editProfileAdm, deleteProfile,
} = require('../service/userService');

const findAllUser = rescue(async (req, res) => {
  const { role } = req.user;
  if (role !== 'admin') throw boom.forbidden('Without permission');
  const result = await findAll();
  res.status(200).json(result);
});
const findMyId = rescue(async (req, res) => {
  const { id } = req.user;
  const result = await findById(id);
  res.status(200).json(result);
});
const editMyId = rescue(async (req, res) => {
  const { id } = req.user;
  const result = await editProfile({ id, ...req.body });
  res.status(200).json({ result });
});
const editAdmId = rescue(async (req, res) => {
  const { role } = req.user;
  if (role !== 'admin') throw boom.forbidden('Without permission');
  const { id } = req.params;
  const result = await editProfileAdm({ id, ...req.body });
  res.status(200).json({ result });
});

const deleteUser = rescue(async (req, res) => {
  const { role, id } = req.user;
  if (role !== 'user') throw boom.forbidden('Without permission');
  await deleteProfile(id);
  res.status(200).json({ message: 'Deleted' });
});
const deleteAdmUser = rescue(async (req, res) => {
  const { role } = req.user;
  if (role !== 'admin') throw boom.forbidden('Without permission');
  const { id } = req.params;
  await deleteProfile(id);
  res.status(200).json({ message: 'Deleted' });
});

module.exports = {
  findAllUser, findMyId, editMyId, editAdmId, deleteUser, deleteAdmUser,
};

const boom = require('@hapi/boom');
const rescue = require('express-rescue');
const {
  findAll, findById, addMovie, removeMovie,
} = require('../service/favoriteService');

const favoriteAll = rescue(async (req, res) => {
  const { role } = req.user;
  if (role !== 'admin') throw boom.forbidden('Without permission');
  const result = await findAll();
  res.status(200).json(result);
});
const myFavorite = rescue(async (req, res) => {
  const { role, id } = req.user;
  if (role !== 'user') throw boom.forbidden('admin doesn\' have favorites');
  const result = await findById(id);
  res.status(200).json(result);
});
const addFavorite = rescue(async (req, res) => {
  const idMovie = req.params.id;
  const { role, id } = req.user;
  if (role !== 'user') throw boom.forbidden('admin doesn\' have favorites');
  const result = await addMovie(id, idMovie);
  res.status(200).json(result);
});
const removeFavorite = rescue(async (req, res) => {
  const idMovie = req.params.id;
  const { role, id } = req.user;
  if (role !== 'user') throw boom.forbidden('admin doesn\' have favorites');
  await removeMovie(id, idMovie);
  res.status(200).json({ message: 'Movie deleted' });
});

module.exports = {
  favoriteAll, myFavorite, addFavorite, removeFavorite,
};

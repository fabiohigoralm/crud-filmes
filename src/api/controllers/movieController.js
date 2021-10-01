const rescue = require('express-rescue');
const boom = require('@hapi/boom');
const movieVerify = require('../utils/movieSchema');
const {
  findAll, findById, postMovies, editMovies, movieDelete,
} = require('../service/movieService');

const getAll = rescue(async (req, res) => {
  const result = await findAll();
  return res.status(200).json(result);
});
const getById = rescue(async (req, res) => {
  const { id } = req.params;
  const idMovie = await findById(id);
  return res.status(200).json(idMovie);
});

const postMovie = rescue(async (req, res, next) => {
  const { role } = req.user;
  if (role !== 'admin') throw boom.forbidden('User:Without permission');
  const { error } = movieVerify.validate(req.body);
  if (error) { next(error); }
  const result = await postMovies(req.body);
  return res.status(201).json(result);
});
const editMovie = rescue(async (req, res, next) => {
  const { id } = req.params;
  const { role } = req.user;
  if (role !== 'admin') throw boom.forbidden('User:Without permission');
  const { error } = movieVerify.validate(req.body);
  if (error) { next(error); }
  const result = await editMovies(id, req.body);
  return res.status(201).json(result);
});

const deleteMovie = rescue(async (req, res) => {
  const { id } = req.params;
  const { role } = req.user;
  if (role !== 'admin') throw boom.forbidden('User:Without permission');
  await movieDelete(id);
  return res.status(201).json({ message: 'Deleted' });
});

module.exports = {
  getAll, getById, postMovie, editMovie, deleteMovie,
};

const { UserMovie } = require('../../../models');
const movieService = require('./movieService');

const findAll = async () => {
  const allFavorite = await UserMovie.findAll({ attributes: { exclude: ['id', 'createdAt', 'updatedAt'], include: ['user_id', 'movie_id'] } });
  return allFavorite;
};

const findById = async (id) => {
  const IdFavorite = await UserMovie.findAll({ where: { user_id: id }, attributes: { exclude: ['id', 'createdAt', 'updatedAt'], include: ['user_id', 'movie_id'] } });
  return IdFavorite;
};

const addMovie = async (userId, movieId) => {
  await movieService.findById(movieId);
  await UserMovie.create({ user_id: userId, movie_id: movieId });
  const allFavorite = await UserMovie.findAll({ where: { user_id: userId }, attributes: { exclude: ['id', 'createdAt', 'updatedAt'], include: ['user_id', 'movie_id'] } });
  return allFavorite;
};
const removeMovie = async (userId, movieId) => {
  await movieService.findById(movieId);
  const deleteMovie = await UserMovie.destroy({ where: { movie_id: movieId, user_id: userId } });
  return deleteMovie;
};

module.exports = {
  findAll, findById, addMovie, removeMovie,
};

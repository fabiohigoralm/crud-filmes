const boom = require('@hapi/boom');
const { Movie } = require('../../../models');

const findAll = async () => {
  const allMovies = await Movie.findAll();
  return allMovies;
};
const findById = async (id) => {
  try {
    const idMovie = await Movie.findOne({ where: { id } });
    if (!idMovie) throw new Error();
    return idMovie;
  } catch (e) {
    throw boom.notFound('Movie does not exist');
  }
};
const postMovies = async ({
  title, subtitle, storyline, rating, genre,
}) => {
  const createMovie = await Movie.create({
    title, subtitle, storyline, rating, genre,
  });
  return createMovie;
};
const editMovies = async (id, {
  title, subtitle, storyline, rating, genre,
}) => {
  findById(id);
  await Movie.update({
    title, subtitle, storyline, rating, genre,
  }, { where: { id } });
  const verify = findById(id);
  return verify;
};

const movieDelete = async (id) => {
  await findById(id);
  const result = await Movie.destroy({ where: { id } });
  return result;
};

module.exports = {
  findAll, findById, postMovies, editMovies, movieDelete,
};

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('UserMovies',
    [
      { user_id: 2, movie_id: 1 },
      { user_id: 2, movie_id: 2 },
      { user_id: 3, movie_id: 1 },
      { user_id: 4, movie_id: 3 },
      { user_id: 4, movie_id: 4 },
    ],
    {},
  );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('UserMovies', null, {});
  }
};

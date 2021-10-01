module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Movies',
      [{
        id: 1,
        title: 'Titanic',
        subtitle: 'Titanic',
        storyline: 'sheep =)',
        rating: 10,
        genre: 'genre1',
      },
      {
        id: 2,
        title: 'Volta dos que...',
        subtitle: 'volta dos q',
        storyline: 'turn',
        rating: 10,
        genre: 'genre2',
      },
      {
        id: 3,
        title: 'Agua Molhada',
        subtitle: 'chuva no gelo',
        storyline: 'water and ice',
        rating: 8,
        genre: 'genre3',
      },
      {
        id: 4,
        title: 'Alicate e parafuso',
        subtitle: 'ferramentas',
        storyline: 'cut and press',
        rating: 8,
        genre: 'genre4',
      },
      ], { timestamps: false });
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Movies', null, {});
  },
};

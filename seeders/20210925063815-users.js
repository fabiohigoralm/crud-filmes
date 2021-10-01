module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users',
      [{
        id: 1,
        fullName: 'admin',
        email: 'admin@com',
        birthDate: '1980-06-15 09:34:21',
        password: '123456789',
        country: 'Brasil',
        role: 'admin',
        createdAt: Sequelize.fn('now'),
        updatedAt: Sequelize.fn('now'),
      },
      {
        id: 2,
        fullName: 'Lewis Hamilton',
        email: 'lewishamilton@gmail.com',
        birthDate: '1980-06-15 09:34:21',
        password: 'rubinhoamigo',
        country: 'Inglaterra',
        role: 'user',
        createdAt: Sequelize.fn('now'),
        updatedAt: Sequelize.fn('now'),
      },
      {
        id: 3,
        fullName: 'Luciano Hulk',
        email: 'hulk.luciano@gmail.com',
        birthDate: '1990-06-15 09:34:21',
        password: 'caldeirao',
        country: 'Brasil',
        role: 'user',
        createdAt: Sequelize.fn('now'),
        updatedAt: Sequelize.fn('now'),
      },
      {
        id: 4,
        fullName: 'Pedro Barros',
        email: 'pedro.barros@gmail.com',
        birthDate: '1995-06-15 09:34:21',
        password: 'skate',
        country: 'Brasil',
        role: 'user',
        createdAt: Sequelize.fn('now'),
        updatedAt: Sequelize.fn('now'),
      },
      ], { timestamps: false });
  },
  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Users', null, {});
  },
};

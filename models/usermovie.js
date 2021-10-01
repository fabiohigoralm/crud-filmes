module.exports = (sequelize, DataTypes) => {
  const userMovie = sequelize.define('UserMovie', {
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    movie_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },

  }, { timestamps: false });

  userMovie.associate = (models) => {
    models.Movie.belongsToMany(models.User, {
      as: 'users',
      through: userMovie,
      foreignKey: 'id',
      otherKey: 'id',
    });
    models.User.belongsToMany(models.Movie, {
      as: 'movies',
      through: userMovie,
      foreignKey: 'id',
      otherKey: 'id',
    });
  };

  return userMovie;
};

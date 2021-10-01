module.exports = (sequelize, DataTypes) => {
  const movie = sequelize.define('Movie', {
    title: DataTypes.STRING,
    subtitle: DataTypes.STRING,
    storyline: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    genre: DataTypes.STRING,

  }, {
    timestamps: true,
    sequelize,
    modelName: 'Movie',
  });

  return movie;
};

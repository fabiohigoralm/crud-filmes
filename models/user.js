module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('User', {
    fullName: DataTypes.STRING,
    birthDate: DataTypes.DATE,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    country: DataTypes.STRING,
    role: DataTypes.STRING,

  }, {
    timestamps: true,
    sequelize,
    modelName: 'User',
  });

  return user;
};

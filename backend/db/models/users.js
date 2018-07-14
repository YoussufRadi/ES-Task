module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    name: DataTypes.STRING,
    gmail: DataTypes.STRING,
    facebook: DataTypes.STRING,
  });
  Users.associate = models => {
    Users.hasMany(models.TodoItem, {
      foreignKey: 'userId',
      as: 'todoItems',
    });
  };
  return Users;
};

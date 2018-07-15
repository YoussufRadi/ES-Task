module.exports = (sequelize, DataTypes) => {
  const TodoItem = sequelize.define('TodoItem', {
    complete: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    subject: DataTypes.STRING,
    comment: DataTypes.STRING,
    date: DataTypes.DATE,
  });
  TodoItem.associate = models => {
    TodoItem.belongsTo(models.Users, {
      foreignKey: 'userId',
      onDelete: 'CASCADE',
    });
  };
  return TodoItem;
};

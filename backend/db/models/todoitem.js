module.exports = (sequelize, DataTypes) => {
  const TodoItem = sequelize.define('TodoItem', {
    date: DataTypes.DATE,
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subject: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    comment: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  });
  TodoItem.associate = models => {
    TodoItem.belongsTo(models.Users, {
      foreignKey: 'userId',
      onDelete: 'CASCADE',
    });
  };
  return TodoItem;
};

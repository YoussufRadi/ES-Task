'use strict';
module.exports = (sequelize, DataTypes) => {
  var TodoItem = sequelize.define('TodoItem', {
    subject: DataTypes.STRING,
    comment: DataTypes.STRING,
    complete: DataTypes.BOOLEAN,
    date: DataTypes.DATE
  }, {});
  TodoItem.associate = function(models) {
    // associations can be defined here
  };
  return TodoItem;
};
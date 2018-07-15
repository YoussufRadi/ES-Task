module.exports = (sequelize, DataTypes) => {
  const ResetTokens = sequelize.define(
    'ResetTokens',
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      token: DataTypes.STRING,
      expires_at: DataTypes.DATE,
    },
    {},
  );
  ResetTokens.associate = function (models) {};
  return ResetTokens;
};

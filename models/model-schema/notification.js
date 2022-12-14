const { Sequelize } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const Notification = sequelize.define(
    'notification',
    {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
      },
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      type: DataTypes.STRING,
      status: DataTypes.STRING,
      description: DataTypes.STRING,
      receiver: DataTypes.STRING,
      condition: DataTypes.STRING,
    },
    {
      timestamps: true,
      paranoid: true,
    }
  );

  return Notification;
};

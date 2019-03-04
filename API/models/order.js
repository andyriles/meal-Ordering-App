'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    Name: DataTypes.STRING,
    Quantity: DataTypes.INTEGER,
    Price: DataTypes.INTEGER
  }, {});
  Order.associate = function (models) {
    // associations can be defined here
    Order.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'User',
    });
    Order.belongsTo(models.User, {
      foreignKey: 'catererId',
      as: 'Caterer',
    });
  };
  return Order;
};
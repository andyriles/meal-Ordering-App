'use strict';

module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    address: DataTypes.STRING
  }, {});

  User.associate = function (models) {
    // associations can be defined here
    User.belongsTo(models.Role, {
      foreignKey: 'roleId'
    });
    User.hasMany(models.Meal, {
      foreignKey: 'catererId',
      as: 'meals'
    });
    User.hasMany(models.Menu, {
      foreignKey: 'catererId',
      as: 'menus'
    });
    User.hasMany(models.Order, {
      foreignKey: 'userId',
      as: 'orders'
    });
  };

  return User;
};
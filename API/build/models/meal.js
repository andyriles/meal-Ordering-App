'use strict';

module.exports = function (sequelize, DataTypes) {
  var Meal = sequelize.define('Meal', {
    Name: DataTypes.STRING
  }, {});

  Meal.associate = function (models) {
    // associations can be defined here
    Meal.belongsTo(models.User, {
      foreignKey: 'catererId'
    });
  };

  return Meal;
};
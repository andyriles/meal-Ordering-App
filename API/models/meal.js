'use strict';
module.exports = (sequelize, DataTypes) => {
  const Meal = sequelize.define('Meal', {
    Name: DataTypes.STRING
  }, {});
  Meal.associate = function (models) {
    // associations can be defined here
    Meal.belongsTo(models.User, {
      foreignKey: 'catererId',
    });
  };
  return Meal;
};
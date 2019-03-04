'use strict';
export default (sequelize, DataTypes) => {
  const Menu = sequelize.define('Menu', {
    Name: DataTypes.STRING,
    Quantity: DataTypes.INTEGER,
    Price: DataTypes.INTEGER
  }, {});
  Menu.associate = function (models) {
    // associations can be defined here
    Menu.belongsTo(models.User, {
      foreignKey: 'catererId',
    });
  };
  return Menu;
};
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default(sequelize, DataTypes) {
  var Menu = sequelize.define('Menu', {
    Name: DataTypes.STRING,
    Quantity: DataTypes.INTEGER,
    Price: DataTypes.INTEGER
  }, {});

  Menu.associate = function (models) {
    // associations can be defined here
    Menu.belongsTo(models.User, {
      foreignKey: 'catererId'
    });
  };

  return Menu;
};

exports.default = _default;
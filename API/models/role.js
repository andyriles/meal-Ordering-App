'use strict';
module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define('Role', {
    Name: DataTypes.STRING
  }, {});
  Role.associate = function (models) {
    // associations can be defined here
    Role.hasMany(models.User, {
      foreignKey: 'roleId',
      as: 'users',
    });
  };
  return Role;
};
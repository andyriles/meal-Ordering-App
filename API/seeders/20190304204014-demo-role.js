'use strict';
const now = new Date();
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Roles', [{
      Name: 'Caterer',
      createdAt: now,
      updatedAt: now
    },
    {
      Name: 'User',
      createdAt: now,
      updatedAt: now
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Roles', null, {});
  }
};

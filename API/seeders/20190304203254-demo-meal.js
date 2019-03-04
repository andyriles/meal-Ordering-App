'use strict';
const now = new Date();
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Meals', [{
      Name: 'Jollof Rice and Chicken',
      createdAt: now,
      updatedAt: now
    },
    {
      Name: 'Fried Rice and Chicken',
      createdAt: now,
      updatedAt: now
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Meals', null, {});
  }
};

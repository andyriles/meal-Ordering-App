'use strict';
const now = new Date();
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Orders', [{
      Name: 'Jollof Rice and Chicken',
      Quantity: '2',
      Price: '1000',
      createdAt: now,
      updatedAt: now
    },
    {
      Name: 'Fried Rice and Chicken',
      Quantity: '4',
      Price: '1400',
      createdAt: now,
      updatedAt: now
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Orders', null, {});
  }
};

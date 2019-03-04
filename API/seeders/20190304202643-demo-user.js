'use strict';
const now = new Date();
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      firstName: 'John',
      lastName: 'Doe',
      email: 'demo@demo.com',
      password: 'qwerty',
      address: '10, Sule Ewenla street, Ijegun, Leagos',
      createdAt: now,
      updatedAt: now
    },
    {
      firstName: 'Andrew',
      lastName: 'Doey',
      email: 'andy@demo.com',
      password: 'qwerty',
      address: '10, Sule Ewenla street, Ijegun, Leagos',
      createdAt: now,
      updatedAt: now
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};

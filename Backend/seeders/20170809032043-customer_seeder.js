'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

    return queryInterface.bulkInsert('customers', [{
      name: 'Jhon Doe',
      gender: 'Male',
      password: '1234512',
      email: 'jhondoe@gmail.com',
      address: 'jl.pondok indah',
      phone_number: '0821312312314',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Antoni Angga',
      gender: 'Male',
      password: '1',
      email: 'antoniangga14@gmail.com',
      address: 'jl.Sandang',
      phone_number: '0821311312314',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ])
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Customer', null, {});
  }
};

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
    return queryInterface.bulkInsert('vehicles', [{
      type: "Nissan Juke",
      tahun: "2017",
      merek: "Nissan",
      id_customer: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      type: "BMW 320I",
      tahun: "2014",
      merek: "BMW",
      id_customer: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('vehicles', null, {})
  }
};

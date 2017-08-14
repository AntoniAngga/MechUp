'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_customer: {
        type: Sequelize.INTEGER
      },
      id_mechanic: {
        type: Sequelize.INTEGER
      },
      id_vehicle: {
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.STRING
      },
      location: {
        type: Sequelize.STRING
      },
      lat_cust: {
        type: Sequelize.STRING
      },
      long_cust: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('orders');
  }
};
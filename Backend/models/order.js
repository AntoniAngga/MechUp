'use strict';
module.exports = function(sequelize, DataTypes) {
  var order = sequelize.define('order', {
    id_customer: DataTypes.INTEGER,
    id_mechanic: DataTypes.INTEGER,
    id_vehicle: DataTypes.INTEGER,
    status: DataTypes.STRING,
    location: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return order;
};
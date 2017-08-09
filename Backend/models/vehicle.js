'use strict';
module.exports = function(sequelize, DataTypes) {
  var vehicle = sequelize.define('vehicle', {
    type: DataTypes.STRING,
    tahun: DataTypes.STRING,
    merek: DataTypes.STRING,
    id_customer: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return vehicle;
};
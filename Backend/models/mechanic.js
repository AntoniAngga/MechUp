'use strict';
module.exports = function(sequelize, DataTypes) {
  var mechanic = sequelize.define('mechanic', {
    id_ktp: DataTypes.INTEGER,
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    gender: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return mechanic;
};
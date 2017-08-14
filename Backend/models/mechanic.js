'use strict';
module.exports = function(sequelize, DataTypes) {
  var mechanic = sequelize.define('mechanic', {
    id_ktp: DataTypes.STRING,
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    gender: DataTypes.STRING,
    password: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    username: DataTypes.STRING,
    lat: DataTypes.STRING,
    long: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return mechanic;
};
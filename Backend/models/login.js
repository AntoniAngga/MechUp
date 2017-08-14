'use strict';
module.exports = function(sequelize, DataTypes) {
  var login = sequelize.define('login', {
    role: DataTypes.STRING,
    status: DataTypes.STRING,
    id_customer: DataTypes.INTEGER,
    id_mechanic: DataTypes.INTEGER,
    lat: DataTypes.STRING,
    long: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return login;
};
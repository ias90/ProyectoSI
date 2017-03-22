'use strict';
module.exports = function(sequelize, DataTypes) {
  var seccion = sequelize.define('seccion', {
    modalidad: DataTypes.STRING,
    numeroE: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return seccion;
};
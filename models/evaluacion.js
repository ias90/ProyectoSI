'use strict';
module.exports = function(sequelize, DataTypes) {
  var evaluacion = sequelize.define('evaluacion', {
    modelo: DataTypes.STRING,
    resultado: DataTypes.TEXT,
    ciclo: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return evaluacion;
};
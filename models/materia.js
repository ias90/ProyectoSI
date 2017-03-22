'use strict';
module.exports = function(sequelize, DataTypes) {
  var materia = sequelize.define('materia', {
    nombre_M: DataTypes.STRING,
    codigo: DataTypes.STRING,
    secciones: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return materia;
};
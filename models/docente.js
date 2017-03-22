'use strict';
module.exports = function(sequelize, DataTypes) {
  var docente = sequelize.define('docente', {
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    departamento: DataTypes.STRING,
    periodo: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return docente;
};
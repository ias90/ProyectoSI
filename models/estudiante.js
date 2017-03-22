'use strict';
module.exports = function(sequelize, DataTypes) {
  var estudiante = sequelize.define('estudiante', {
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    correo: DataTypes.STRING,
    carnet: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        
        
      }
    }
  });
  return estudiante;
};
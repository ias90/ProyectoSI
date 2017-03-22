'use strict';
module.exports = function(sequelize, DataTypes) {
  var departamento = sequelize.define('departamento', {
    nombre_D: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return departamento;
};
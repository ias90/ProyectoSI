'use strict';
module.exports = function(sequelize, DataTypes) {
  var rutaVisitante = sequelize.define('rutaVisitante', {
    path: DataTypes.STRING,
    IP_address: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return rutaVisitante;
};
'use strict';
module.exports = function(sequelize, DataTypes) {
  var visitante = sequelize.define('visitante', {
    IP_address: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        //visitante.belongsToMany(models.ruta, { through: models.rutaVisitante, foreignKey: 'id' });
      }
    }
  });
  return visitante;
};
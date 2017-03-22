'use strict';
module.exports = function(sequelize, DataTypes) {
  var ruta = sequelize.define('ruta', {
    path: DataTypes.STRING,
    descripction: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        //ruta.belongsToMany(models.visitante, { through: models.rutaVisitante, foreignKey: 'id'});
      }
    }
  });
  return ruta;
};
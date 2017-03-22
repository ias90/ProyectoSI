'use strict';
module.exports = function(sequelize, DataTypes) {
  var pruebaTipoB = sequelize.define('pruebaTipoB', {
    f4: DataTypes.STRING,
    f5: DataTypes.STRING,
    f7: DataTypes.STRING,
    f8: DataTypes.STRING,
    f10: DataTypes.STRING,
    f11: DataTypes.STRING,
    f12: DataTypes.STRING,
    f13: DataTypes.STRING,
    f14: DataTypes.STRING,
    f15: DataTypes.STRING,
    f16: DataTypes.STRING,
    f17: DataTypes.STRING,
    f18: DataTypes.STRING,
    f19: DataTypes.STRING,
    f20: DataTypes.STRING,
    f21: DataTypes.STRING,
    f22: DataTypes.STRING,
    f23: DataTypes.STRING,
    f24: DataTypes.STRING,
    f25: DataTypes.STRING,
    f26: DataTypes.STRING,
    
    total: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return pruebaTipoB;
};
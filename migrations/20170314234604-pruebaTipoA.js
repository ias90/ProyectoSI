'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('pruebaTipoAs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fecha: {
        type: Sequelize.STRING
      },
      nombreP: {
        type: Sequelize.STRING
      },
      codigoM: {
        type: Sequelize.STRING
      },
      seccion: {
        type: Sequelize.STRING
      },
      // APARTADO 1
      o1: {
        type: Sequelize.STRING
      },
      o2: {
        type: Sequelize.STRING
      },
      o3: {
        type: Sequelize.STRING
      },
      o4: {
        type: Sequelize.STRING
      },
      o5: {
        type: Sequelize.STRING
      },
      o6: {
        type: Sequelize.STRING
      },
      o7: {
        type: Sequelize.STRING
      },
      o8: {
        type: Sequelize.STRING
      },
      o9: {
        type: Sequelize.STRING
      },
      o10: {
        type: Sequelize.STRING
      },
      //apartado 2
      i1: {
        type: Sequelize.STRING
      },
      i2: {
        type: Sequelize.STRING
      },
      i3: {
        type: Sequelize.STRING
      },
      i4: {
        type: Sequelize.STRING
      },
      i5: {
        type: Sequelize.STRING
      },
      i6: {
        type: Sequelize.STRING
      },
      i7: {
        type: Sequelize.STRING
      },
      i8: {
        type: Sequelize.STRING
      },
      i9: {
        type: Sequelize.STRING
      },
      valor: {
        type: Sequelize.STRING
      },
       valor2: {
        type: Sequelize.STRING
      },
       valor3: {
        type: Sequelize.STRING
      },
       valor4: {
        type: Sequelize.STRING
      },
       valor5: {
        type: Sequelize.STRING
      },
       valor6: {
        type: Sequelize.STRING
      },
       valor7: {
        type: Sequelize.STRING
      },
       valor8: {
        type: Sequelize.STRING
      },
      valort: {
        type: Sequelize.STRING
      },
      //APARTADO 3
      
      f24: {
        type: Sequelize.STRING
      },
      f25: {
        type: Sequelize.STRING
      },
      f26: {
        type: Sequelize.STRING
      },
      f27: {
        type: Sequelize.STRING
      },
      f28: {
        type: Sequelize.STRING
      },
      f29: {
        type: Sequelize.STRING
      },
      f30: {
        type: Sequelize.STRING
      },
      f31: {
        type: Sequelize.STRING
      },
      f32: {
        type: Sequelize.STRING
      },
      f33: {
        type: Sequelize.STRING
      },
      f34: {
        type: Sequelize.STRING
      },
      f35: {
        type: Sequelize.STRING
      },
      f36: {
        type: Sequelize.STRING
      },
      f37: {
        type: Sequelize.STRING
      },
      f38: {
        type: Sequelize.STRING
      },
      f39: {
        type: Sequelize.STRING
      },
      f40: {
        type: Sequelize.STRING
      },
      f41: {
        type: Sequelize.STRING
      },
      f42: {
        type: Sequelize.STRING
      },
      f43: {
        type: Sequelize.STRING
      },
      f44: {
        type: Sequelize.STRING
      },
      f45: {
        type: Sequelize.STRING
      },
      f46: {
        type: Sequelize.STRING
      },
      f47: {
        type: Sequelize.STRING
      },
      f48: {
        type: Sequelize.STRING
      },
      f49: {
        type: Sequelize.STRING
      },
      f50: {
        type: Sequelize.STRING
      },
      f51: {
        type: Sequelize.STRING
      },
      f52: {
        type: Sequelize.STRING
      },
      f53: {
        type: Sequelize.STRING
      },
      f54: {
        type: Sequelize.STRING
      },
      f55: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('pruebaTipoAs');
  }
};

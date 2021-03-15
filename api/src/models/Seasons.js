const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('seasons', {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
    
  };
  
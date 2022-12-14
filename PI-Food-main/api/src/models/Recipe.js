const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

const Recipe = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      unique : true,
      primaryKey: true,
      validate : {
        isUUID: 4,
      }  
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false, 
      validate : {
        notEmpty : true,
      },
    
    },
    summary: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate : {
        notEmpty: true,
        }
      },
    healthScore: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate : {
        isNumeric : true, 
        min : 0, 
        max : 100, 
        notEmpty : true 
      },
    },
    steps: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: true,
    },
  },
  createdInDB : {
    type: DataTypes.BOOLEAN,
    allowNull : false,
    defaultValue : true,
  },
  review: {
    type: DataTypes.STRING,
    allowNull: false,
    validate : {
      notEmpty : true,
    }
  }
});
};
  
module.exports = Recipe;

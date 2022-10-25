const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

module.exports = (sequelize) => {
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
       // isAlpha : true,
      },
      //defaultValue: "No name", 
    },
    summary: {
      type: DataTypes.TEXT,
      allowNull: false,
      //defaultValue: "No summary",
      validate : {
        notEmpty: true,
        }
      },
    healthScore: {
      type: DataTypes.INTEGER,
      allowNull: false,
      //defaultValue: 0,
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
      //defaultValue: "No steps",
      validate: {
        notEmpty: true,
    },
  },
  createdInDB : {
    type: DataTypes.BOOLEAN,
    allowNull : false,
    defaultValue : true,
  }
});
};
  


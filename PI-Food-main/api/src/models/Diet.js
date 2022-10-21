const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('diet', {
    id: {
      type: DataTypes.INTEGER, //  este tipo de dato es para que se genere un id automaticamente con un formmato que no se repita
       autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    name : {
        type: DataTypes.STRING,
        allowNull: false,
        //defaultValue: "No name",
        validate : {
          //isAlpha : true,
          notEmpty : true,
        }
  },
  },
  {timestamps : false}
  );
};



//Agregar validaciones, valores por defecto y restricciones a los campos de la tabla Recipe 
//(campos que no pueden ser nulos, valores por defecto, valores únicos, etc.)
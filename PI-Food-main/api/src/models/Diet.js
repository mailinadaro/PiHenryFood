const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Diet', {
    id: {
      type: DataTypes.UUID, //  este tipo de dato es para que se genere un id automaticamente con un formmato que no se repita
        defaultValue: DataTypes.UUIDV4, // este es un id que se genera automaticamente pero en formato de string
        allowNull: false,
        primaryKey: true,
        validate: {
          isUUID: 4, // esta vaidacion es para que el id sea un uuid de version 4 por lo que no se puede repetir
        }
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
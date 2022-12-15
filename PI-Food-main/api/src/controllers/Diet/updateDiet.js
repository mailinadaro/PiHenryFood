const {Recipe, Diet} = require('../../db.js');




const updateDiet = async function (id, name) {
    try {
        const dietId = await Diet.findByPk(id)

        const putDiet = await dietId.update({
            name,
        })

        // QUE PASA CON LAS RECETAS QUE AHORA LES CAMBIA ESTA RECETA???

        return putDiet;

    
    } catch (error) {
        console.log(error)
    }
}

module.exports = {updateDiet}
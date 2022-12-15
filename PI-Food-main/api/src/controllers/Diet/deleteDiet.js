const {Recipe, Diet} = require('../../db.js');



const deleteDiet = async function (id) {
    try {
        const dietId = await Diet.findByPk(id)

        if(dietId){
            await Diet.destroy({
                where: {
                    id,
                }
            })
            
            // QUE PASA CON LAS RECETAS QUE AHORA DEJAN DE TENER ESTA RECETA???


            return "Diet sucessfully destroyed"
        }
    
    } catch (error) {
        console.log(error)
    }
}

module.exports = {deleteDiet}
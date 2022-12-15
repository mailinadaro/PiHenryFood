const {Recipe, Diet} = require('../../db.js');



const deleteDiet = async function (id) {
    try {
        const dietId = await Diet.findByPk(id)

     
            await dietId.setRecipes(null)
    
            if(dietId){
                await Diet.destroy({
                    where: {
                        id,
                    }
                })
    
                return "Diet sucessfully destroyed"
            }
    
    } catch (error) {
        console.log(error)
    }
}

module.exports = {deleteDiet}
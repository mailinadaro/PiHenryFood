const {Recipe, Diet} = require('../../db.js');


const deleteRecipe = async function (id) {
    try {
        
        const recipe = await Recipe.findByPk(id, {
            include: {
                model: Diet,
                atributes: ["name"],
                through: {
                    attributes: []
                }
            }
        })

        if(recipe){
            await recipe.destroy({
                where : {
                    id,
                }
            })

            return "The recipe was sucessfully deleted"
        }



    } catch (error) {
        console.log(error)
    }
}

module.exports= {deleteRecipe}
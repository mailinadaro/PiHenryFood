const {Recipe, Diet} = require('../../db.js');


const updateRecipe = async function (id, name, summary, healthScore, steps, createdInDB, image, review, diets){
    try {
        const recipe = await Recipe.findByPk(id)
          
        if(recipe) {
             await recipe.update(
                {name, 
                summary, 
                healthScore, 
                steps, 
                createdInDB,
                image, 
                review
            })

             if(diets) {  

            await recipe.setDiets([]); 

            const diet = await Diet.findAll({  
                         where : {
                                 name : diets
                                }
                            });
                          
            await recipe.addDiet(diet); 

             }

            return recipe;   
            }

        throw new Error("Recipe not found")

    } catch (error) {
        console.log(error);
    }
}


module.exports = {updateRecipe}
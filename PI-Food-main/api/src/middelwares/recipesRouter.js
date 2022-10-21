const {Router} = require('express');
const {Recipe, Diet} = require('../db.js');
const { getAllRecipes } = require('../controllers/getRecipes.js');
const { addNewRecipe } = require('../controllers/addNewRecipe.js');
const { getRecipeByIdAPI, getRecipeByIdDB, getRecipeById} = require('../controllers/getRecipeId.js');


const recipesRouter = Router();


recipesRouter.get('/', async (req, res) => {
    try{
        const {name} = req.query;  
        const allRecipes = await getAllRecipes();
        //console.log(allRecipes)
        
        if(name){
            const recipesByName = allRecipes.filter(recipe => recipe.name.toLowerCase().includes(name.toLowerCase()));
            
            if(recipesByName.length){ 
                res.status(200).send(recipesByName);
            } else {
                res.status(404).send({message : 'No recipes found'});
            }

        } else {
            res.status(200).send(allRecipes);
        }

    } catch (error) {
        res.status(400).send({error : error.message});
    }
});

recipesRouter.post('/', async (req, res) => {
    try{
        const {name, summary, healthScore, steps, createdInDB, diets} = req.body 
        
        //compruebo si tengo los datos necesarios para crear la receta
        if(!name || !summary || name.length < 3 || summary.length < 3){
            res.status(400).send({error : 'Name and summary are required'});
        }

        const newRecipe = await addNewRecipe(name, summary, healthScore, steps, createdInDB, diets);
        res.status(200).send(newRecipe);

    }catch(error){
        res.status(400).send({error: error.message})
    }
})

recipesRouter.get('/:id', async (req, res) => {
    const {id} = req.params;
try{
   
    const recipeId = await getRecipeById(id)
   /*  if(!id.includes("-")){
        const recipeAPI = await getRecipeByIdAPI(id)
   
        if(recipeAPI){
            res.status(200).send(recipeAPI)
        }else{
            res.status(404).send({message: "ID not found"})
        }
    }

    const recipeDB =  await getRecipeByIdDB(id)
  // console.log(recipeDB) */

        if(recipeId){  
            res.status(200).send(recipeId); 
        } else {
            res.status(404).send({message : 'No recipe found'}); 
        }
    
} catch (error) {
    res.status(400).send({error : error.message});
}
});  


















////////////////////////// EXTRA ///////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

/* ///// DELETE ///////
recipesRouter.delete('/:id', async (req, res) => {
    try{
        const {id} = req.params;
        //deberia saber si buscar en la db o en la api, para eso puedo preguntar por las caracteristias del id, , ya que son diferentes.
        const recipe = await Recipe.findByPk(id); /// aca solo busca los que estan en la DB
        // falta filtrado para la api
        if(recipe){
            await Recipe.destroy({where: {id}})
            res.status(200).send('eliminado con exito')
        }
    }
    catch(error){
        res.status(400).send({error: error.message})
    }
})


///// PUT ////////////
recipesRouter.put('/:id', async (req, res) => {
    try{
        const {id} = req.params;
        const {name, summary, healthScore, steps} = req.body;
        const recipe = await Recipe.findByPk(id);
        // igual falata logica para el caso de que sea un id de la api
        if(recipe){
            await Recipe.update({name, summary, healthScore, steps}, {where: {id}})
            res.status(200).send('actualizado con exito')
        }
    }
    catch(error){
        res.status(400).send({error: error.message})
    }
}) */


module.exports = recipesRouter;
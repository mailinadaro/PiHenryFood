const {Router} = require('express');
const {Recipe, Diet} = require('../db.js');
const {getRecipesApi, getRecipesDb,  getAllRecipes } = require('../controllers/getRecipes.js');
const { addNewRecipe } = require('../controllers/addNewRecipe.js');
const { getRecipeByIdApi, getRecipeByIdDB, getRecipeById} = require('../controllers/getRecipeId.js');
const {deleteRecipe} = require('../controllers/deleteRecipe.js')

const recipesRouter = Router();

////// GET QUERY ////
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


///// POST ////
recipesRouter.post('/', async (req, res) => {
    try{
        const {name, summary, healthScore, steps, createdInDB, diets} = req.body 
        //validacion de datos recibidos
        if(!name || !summary || name.length < 3 || summary.length < 3){
            res.status(400).send({error : 'Name and summary are required'});
        }
        const newRecipe = await addNewRecipe(name, summary, healthScore, steps, createdInDB, diets);
        res.status(200).send(newRecipe);
    }catch(error){
        res.status(400).send({error: error.message})
    }
})


/// GET ID //////
recipesRouter.get('/:id', async (req, res) => {
    const {id} = req.params;
try{
    const recipeId = await getRecipeById(id)
        if(recipeId){  
            res.status(200).send(recipeId); 
        } else {
            res.status(404).send({message : 'No recipe found'}); 
        } 
} catch (error) {
    res.status(400).send({error : error.message});
}
});  



  

module.exports = recipesRouter;
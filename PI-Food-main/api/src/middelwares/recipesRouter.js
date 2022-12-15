const {Router} = require('express');
const {Recipe, Diet} = require('../db.js');
const {getRecipesApi, getRecipesDb,  getAllRecipes } = require('../controllers/getRecipes.js');
const { addNewRecipe } = require('../controllers/addNewRecipe.js');
const { getRecipeByIdApi, getRecipeByIdDB, getRecipeById} = require('../controllers/getRecipeId.js');
 const { updateRecipe } = require('../controllers/updateRecipe.js');
 const {deleteRecipe} = require('../controllers/deleteRecipe')


const recipesRouter = Router();


recipesRouter.get('/', async (req, res) => {
    try{
        const {name} = req.query;  
        const allRecipes = await getAllRecipes();
      
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
        const {name, summary, healthScore, steps, createdInDB, review, image, cookTime, economic, healthy, popular, diets} = req.body 
       
        if(!name || !summary || name.length < 3 || summary.length < 3){
            res.status(400).send({error : 'Name and summary are required'});
        }
        const newRecipe = await addNewRecipe(name, summary, healthScore, steps, createdInDB, review, image, cookTime, economic, healthy, popular, diets);
        res.status(200).send(newRecipe);
    }catch(error){
        res.status(400).send({error: error.message})
    }
})



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



recipesRouter.put('/:id', async (req, res)=>{
    try {
        const {id} = req.params    
         const {name, summary, healthScore, steps, createdInDB, image, review, diets} = req.body 
    

        if(!req.body || !id){
            res.status(400).send({message: "Some fields are required"})
        }

        const recipeUpdate = await updateRecipe(id, name, summary, healthScore, steps, createdInDB, image, review, diets)
      
        if(recipeUpdate){
            res.status(200).send(recipeUpdate)
        }else{
            res.status(404).send({message: 'Recipe not updated'})
        }
    } catch (error) {
        res.status(400).send({error: error.message})
    }
})



recipesRouter.delete('/:id', async (req, res)=>{
    try {
        const {id} = req.params
      
        const recipeDelete = await deleteRecipe(id)
        

        if(recipeDelete){
            res.status(200).send("The recipe was deleted")
        }else{
            res.status(400).send({message: "The recipe wasn't deleted"})
        }
        
    } catch (error) {
        res.status(400).send({error: error.message})
    }
})



  

module.exports = recipesRouter;
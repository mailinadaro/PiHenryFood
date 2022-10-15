const {Router} = require('express');

const {Recipe, Diet} = require('../db.js');
const axios = require('axios');
const { getAllRecipes } = require('../controllers/getRecipes.js');
const { addNewRecipe } = require('../controllers/addNewRecipe.js');
//const { getRecipeById } = require('../controllers/getRecipeById.js');
const {API_KEY} = process.env;


const recipesRouter = Router();



////////// FUNCIONA //////////////////  
////////////// GET /recipes?name="...": ////////////////
//Obtener un listado de las recetas que contengan la palabra ingresada como query parameter
//Si no existe ninguna receta mostrar un mensaje adecuado
recipesRouter.get('/', async (req, res) => {
    try{
        const {name} = req.query;  
        const allRecipes = await getAllRecipes();
        
        if(name){
            const recipesByName = allRecipes.filter(recipe => recipe.name.toLowerCase().includes(name.toLowerCase()));
            
            if(recipesByName.length){ 
                res.send(recipesByName);
            } else {
                res.status(404).send({message : 'No recipes found'});
            }

        } else {
            res.send(allRecipes);
        }

    } catch (error) {
        res.status(400).send({error : error.message});
    }
});






//// FUNCIONA, peso sin usar la ruta de id del readme  /////////
/////////// GET /recipes/{idReceta}: ////////////
//Obtener el detalle de una receta en particular
//Debe traer solo los datos pedidos en la ruta de detalle de receta
//Incluir los tipos de dieta asociados

// esta ruta encuenta las recetas por id de la base de datos pero no por id de la api 

 recipesRouter.get('/:id', async (req, res) => {
    try{
        const {id} = req.params;
        const allRecipes = await getAllRecipes(); // traigo todas las recetas tanto de la api como de la base de datos
       
        if(id){ 
            const recipeById = allRecipes.filter(recipe => recipe.id == id); 
          
            if(recipeById.length){  
                res.status(200).send(recipeById); 
            } else {
                res.status(404).send({message : 'No recipe found'}); //
            }
        }
    } catch (error) {
        res.status(400).send({error : error.message});
    }
});   


///////////// POST /recipes: //////////////////////
//Recibe los datos recolectados desde el formulario controlado de la ruta de creación de recetas por body
//Crea una receta en la base de datos relacionada con sus tipos de dietas.
recipesRouter.post('/', async (req, res) => {
    try{
        const {name, summary, healthScore, steps, image, createdInDB, diets} = req.body // traigo los datos que me envian desde el front
        
        //compruebo si tengo los datos necesarios para crear la receta
        if(!name || !summary || name.length < 3 || summary.length < 3){
            res.status(400).send({error : 'Name and summary are required'});
        }

        const newRecipe = await addNewRecipe(name, summary, healthScore, steps, image, createdInDB, diets);
        res.status(200).json(newRecipe);

    }catch(error){
        res.status(400).send({error: error.message})
    }
})





















////////////////////////// EXTRA ///////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

///// DELETE ///////
recipesRouter.delete('/:id', async (req, res) => {
    try{
        const {id} = req.params;
        const recipe = await Recipe.findByPk(id);
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
        if(recipe){
            await Recipe.update({name, summary, healthScore, steps}, {where: {id}})
            res.status(200).send('actualizado con exito')
        }
    }
    catch(error){
        res.status(400).send({error: error.message})
    }
})


module.exports = recipesRouter;
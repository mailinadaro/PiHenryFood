const {Recipe, Diet} = require('../db.js');
const axios = require('axios');
const {API_KEY} = process.env;

// tiene que buscar por id tanto en la api como en la base de datos
// para buscar en la api tengo que usar el enpoint de la api que me devuelve una receta por id
// `https://api.spoonacular.com/recipes/{id}/information?apiKey={API_KEY}`
const getRecipeById = async (id) => {
    try {
    
        // busco en la api
        const recipeById = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`);
        const recipeApi = recipeById.data; // me devuelve un objeto con la receta que busque por id

        // busco en la base de datos
        const recipeDb = await Recipe.findByPk(id, { // busca en la base de datos por id
            include: {
                model: Diet,
                attributes: ['name'],
                through: {
                    attributes: []
                }
            }
        });

        // si no encuentra la receta en la base de datos, me devuelve null
        // si no encuentra la receta en la api, me devuelve un objeto vacio

        if (recipeDb) { // si la encontro en la base de datos
            const recipe = { //tengo que crear un objeto con la misma estructura que me devuelve la api para que el front lo pueda leer
                               // no puede devolver directamente  
                id: recipeDb.id,
                title: recipeDb.title,
                summary: recipeDb.summary,
                spoonacularScore: recipeDb.spoonacularScore,
                healthScore: recipeDb.healthScore,
                analyzedInstructions: recipeDb.analyzedInstructions,
                diets: recipeDb.diets.map(diet => diet.name)
            }
            return recipe;
        } else{
            if (recipeApi.id) { // si la encontro en la api
                const recipe = {
                    id: recipeApi.id,
                    title: recipeApi.title,
                    summary: recipeApi.summary,
                    spoonacularScore: recipeApi.spoonacularScore,
                    healthScore: recipeApi.healthScore,
                    analyzedInstructions: recipeApi.analyzedInstructions,
                    diets: recipeApi.diets
                }
                return recipe;
            } else {
                return null;
            }
        }



    
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getRecipeById
}




















































































       


       
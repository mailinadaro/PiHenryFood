const {Recipe, Diet} = require('../db.js');
const axios = require('axios');
const {API_KEY} = process.env;



////////////////////////// RECETAS DE LA API ///////////////////////
const getRecipesApi = async ()=> {
    try {
   // const recipesApi= await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=100&addRecipeInformation=true`)
    const recipesApi = await axios.get('https://run.mocky.io/v3/84b3f19c-7642-4552-b69c-c53742badee5')
    const recipesApi2 = recipesApi.data.results?.map((element)=>{ //mapeo las recetas de la api y retorno un objeto con la estructura que necesito
        return {
            id: element.id,
            name: element.title,
            summary: element.summary,
            healthScore: element.healthScore,
            image: element.image,
            diets: element.diets
        }
    });
        return recipesApi2; 
    } catch (error) {
        console.log(error) 
    }
};


/////////////////////// RECETAS DE LA BASE DE DATOS ///////////////////////
const getRecipesDb = async () => {
    try {
        const recipesDb = await Recipe.findAll({ //traigo todas las recetas de la base de datos
            include: {                            //incluyo los tipos de dietas de cada receta
                model: Diet,            
                attributes: ['name'],             
                through: {                      
                    attributes: []            //no incluyo los atributos de la tabla intermedia
                }
            }
        });
        return recipesDb; // devuelve las recetas de la base de datos
    } catch (error) {
        console.log(error);  //devuelve el error
    }
}


 ///////////////  RECETAS JUNTAS ///////////////////////
const getAllRecipes = async () => {
    const api_recipes = await getRecipesApi(); //traigo las recetas de la api
    const db_recipes = await getRecipesDb(); //traigo las recetas de la base de datos
    const allrecipes = api_recipes.concat(db_recipes); //concateno las recetas de la api con las de la base de datos
    return allrecipes; //devuelvo todas las recetas
}

module.exports = {getRecipesApi, getRecipesDb, getAllRecipes};
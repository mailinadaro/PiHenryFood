const {Diet} = require('../db.js');
const axios = require('axios');
const {API_KEY} = process.env;


     const getAllDiets = async function (){
        try {
        const allRecipes = await axios.get(`https://api.spoonacular.com/recipes/complexSearch/?apiKey=${API_KEY}&addRecipeInformation=true&number=100`);
          //const allRecipes = await axios.get('https://run.mocky.io/v3/84b3f19c-7642-4552-b69c-c53742badee5');     
          const dietsArrays = allRecipes.data.results?.map((recipe) => recipe.diets);
          const dietsEach = dietsArrays.flat();
          const diets = [...new Set(dietsEach)];
          
          
          diets.forEach(async (diet) => {
               await Diet.findOrCreate({
                    where: {
                         name: diet
                    }
               })
          })
          return diets;
        } catch (error) {
            console.log(error)
        }
     }

    
   

module.exports= {getAllDiets}

     



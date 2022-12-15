const {Recipe, Diet} = require('../../db.js');


const postDiet = async function (name) {
try {
      
   const newDiet = await Diet.create({
        name,
   })
   return newDiet;
} catch (error) {
    console.log(error)
}
}

module.exports = {postDiet}
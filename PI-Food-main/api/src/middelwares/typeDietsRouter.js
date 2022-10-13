const {Router} = require('express');
const {Diet} = require('../db.js');
const {getAllDiets} = require('../controllers/getAllDiets.js');


const typeDietsRouter = Router();

/////////////////// FUNCIONA ///////////////////////
//GET /diets:
//Obtener todos los tipos de dieta posibles
//En una primera instancia, cuando no exista ninguno, deberán precargar la base de datos 
//con los tipos de datos indicados por spoonacular acá

typeDietsRouter.get('/', async (req, res) => {
    try{
        const allDiets = await getAllDiets() 

        if(allDiets){
            res.status(200).send(allDiets);
        } else {
            res.status(404).send({message : 'No diets found'});
        }
    } catch (error) {
        res.status(400).send({error : error.message});
    }
});














/////////////////////////////////// EXTRA /////////////////////////////////
//////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////


//////// POST /////////
typeDietsRouter.post('/', async (req, res) => {
    try {
        const {name} = req.body;
        const newDiet = await Diet.create({
            name
        }); 
        res.status(200).send(newDiet);
    } catch (error) {
        res.status(400).send({error : error.message});
    }
});



/////////// DELETE ///////////////
typeDietsRouter.delete('/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const diet = await Diet.findByPk(id);
        if(diet){
            await diet.destroy();
            res.status(200).send({message : 'Diet deleted'});
        } 
    } catch (error) {
        res.status(400).send({error : error.message});
    }
});


///////// PUT /////////////
typeDietsRouter.put('/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const {name} = req.body;
        const diet = await Diet.findByPk(id);
        if(diet){
            await diet.update({
                name
            });
            res.status(200).send({message : 'Diet updated'});
        }
    } catch (error) {
        res.status(400).send({error : error.message});
    }
});



module.exports = typeDietsRouter;

const {Router} = require('express');
const {Diet} = require('../db.js');
const {getAllDiets} = require('../controllers/getAllDiets.js');


const typeDietsRouter = Router();


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


module.exports = typeDietsRouter;

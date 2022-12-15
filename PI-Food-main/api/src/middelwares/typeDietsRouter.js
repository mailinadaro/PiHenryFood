const {Router} = require('express');
const {Diet} = require('../db.js');
const {getAllDiets} = require('../controllers/Diet/getAllDiets.js');
const { postDiet } = require('../controllers/Diet/postDiet.js');
const { updateDiet } = require('../controllers/Diet/updateDiet.js');
const { deleteDiet } = require('../controllers/Diet/deleteDiet.js');



const typeDietsRouter = Router();


typeDietsRouter.get('/', async (req, res) => {
    try{
        const allDiets = await getAllDiets() 
        console.log(allDiets)
        if(allDiets){
            res.status(200).send(allDiets);
        } else {
            res.status(404).send({message : 'No diets found'});
        }
    } catch (error) {
        res.status(400).send({error : error.message});
    }
});


typeDietsRouter.post('/', async(req,res)=>{
    try {
        const {name} = req.body
        if(!name){
            res.status(404).send("Name is required")
        }

        const newDiet = await postDiet(name)
   
        if(newDiet){
            res.status(200).send(newDiet)
        }else {
            res.status(400).send({message: "The diet was not created"})
        }

    } catch (error) {
        res.status(400).send({error : error.message});
    }
})

typeDietsRouter.put('/:id', async(req,res)=>{
    try {
        const {id} =req.params
        const {name} = req.body
      
        const dietUpdated = await updateDiet(id, name)
       
        if(dietUpdated){
            res.status(200).send(dietUpdated)
        }else {
            res.status(404).send({message: "The diet was not updated"})
        }

        
    } catch (error) {
        res.status(400).send({error : error.message});
    }
})

typeDietsRouter.delete('/:id', async(req,res)=>{
    try {
        const {id} =req.params

        const dietDeleted = await deleteDiet(id)

        if(dietDeleted){
            res.status(200).send("The diet was deleted")
        }else {
            res.status(404).send({message: "The diet was not deleted"})
        }
        
    } catch (error) {
        res.status(400).send({error : error.message});
    }
})

module.exports = typeDietsRouter;

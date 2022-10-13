const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const recipesRouter = require('../middelwares/recipesRouter');
const typeDietsRouter = require('../middelwares/typeDietsRouter');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/recipes", recipesRouter);
router.use("/diets", typeDietsRouter);


module.exports = router;

const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const countryRouters = require('./country.js');
const activityRouters = require('./activity.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/api/countries', countryRouters);
router.use('/api/activities', activityRouters);


module.exports = router;

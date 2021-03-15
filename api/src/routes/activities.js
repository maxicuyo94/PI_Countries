const router = require('express').Router();
const axios = require('axios')
const { Country, Season ,Activities} = require('../db');
// [ ] POST /activity:
// Recibe los datos recolectados desde el formulario controlado de la ruta de creación de actividad turística por body
// Crea una actividad turística en la base de datos
module.exports = router;
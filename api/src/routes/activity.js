const router = require('express').Router();
const axios = require('axios')
const { Op } = require("sequelize");
const { Country, Seasons, Activity } = require('../db');
// [ ] POST /activity:
// Recibe los datos recolectados desde el formulario controlado de la ruta de creación de actividad turística por body
// Crea una actividad turística en la base de datos
router.post('/', async function (req, res) {
    let { name, dificulty, duration, country, season } = req.body
    console.log(req.body)
    try {
        let auxCountry = await Country.findAll({
            include: { model: Activity },
            where: { name: { [Op.iLike]: `%${country}%` } }

        })
        let auxActivity = await Activity.findOrCreate({
            where: {
                name,
                dificulty,
                duration
            }
        })
        let auxSeason=await Seasons.findByPk({ [Op.iLike]: `%${season}%` } )
        console.log(auxActivity, auxCountry)
        await auxActivity[0].setCountries(auxCountry[0])
        await auxActivity[0].setSeasons(auxSeason[0])


        res.json(auxActivity)
    } catch (error) {
        res.status(505).send("error")
    }
})

module.exports = router;
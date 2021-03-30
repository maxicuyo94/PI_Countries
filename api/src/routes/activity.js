const router = require('express').Router();
const { Op } = require("sequelize");
const { Country, Season, Activity } = require('../db');
// [ ] POST /activity:
// Recibe los datos recolectados desde el formulario controlado de la ruta de creación de actividad turística por body
// Crea una actividad turística en la base de datos
router.post('/country', async function (req, res) {
    let { name, dificulty, duration, country, } = req.body
    // console.log(req.body)
    try {
        let auxActivity = await Activity.findOrCreate({
            where: {
                name,
                dificulty,
                duration
            }
        })
        let auxCountry = await Country.findAll({
            include: { model: Activity },
            where: { name: { [Op.iLike]: `%${country}%` } }

        })
        console.log(auxActivity, auxCountry)
        await auxActivity[0].setCountries(auxCountry[0])
        res.json(auxActivity)
    } catch (error) {
        res.status(505).send(error)
    }
})
router.post('/season', async function (req, res) {
    let { name, dificulty, duration,  season } = req.body
    console.log( name, dificulty, duration,  season )
    try {
        let auxActivity = await Activity.findOrCreate({
            where: {
                name,
                dificulty,
                duration
            }
        })
        let auxSeason = await Season.findByPk(season)
        await auxActivity[0].setSeasons(auxSeason)
        res.json(auxActivity)
    } catch (error) {
        res.status(505).send("error")
    }
})

module.exports = router;
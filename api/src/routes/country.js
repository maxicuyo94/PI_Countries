const router = require('express').Router();
const axios = require('axios')
const { Op } = require("sequelize");
const { Country, Activities } = require('../db');

// // [ ] GET /countries?name="...":
// // Obtener los países que coincidan con el nombre pasado como query parameter (No necesariamente tiene que ser una matcheo exacto)
// // Si no existe ningún país mostrar un mensaje adecuado

// [ ] GET /countries:
// En una primera instancia deberán traer todos los países desde restcountries y guardarlos en su propia base de datos y luego ya utilizarlos desde allí (Debe almacenar solo los datos necesarios para la ruta principal)
// Obtener un listado de los primeros 10 países
router.get('/', async function (req, res) {
    let { name } = req.query
    console.log(name)
    try {
        if (!name) {
            let auxCountries = await axios.get(`https://restcountries.eu/rest/v2/all`)
            await Promise.all(auxCountries.data.map((c) => {
                let info = {
                    name: c.name,
                    alpha3Code: c.alpha3Code,
                    flag: c.flag,
                    capital: c.capital ? c.capital : 'no capital',
                    region: c.region,
                    subregion: c.subregion,
                    area: parseInt(c.area) ? parseInt(c.area) : 0,
                    population: parseInt(c.population)
                }
                Country.findOrCreate({ where: info })
            }))
            res.json(await Country.findAll({ limit: 10 }))
        }
        else {
            let country = await Country.findAll({
                include: { model: Activities },
                where: {name:{[Op.iLike]:`%${name}%`}}
            })
            country ? res.json(country) : res.sendStatus(404)
        }
    } catch (error) {
        res.status(505).send(error)
    }
})
// [ ] GET /countries/{idPais}:
// Obtener el detalle de un país en particular
// Debe traer solo los datos pedidos en la ruta de detalle de país
// Incluir los datos de las actividades turísticas correspondientes
router.get('/:idPais', async function (req, res) {
    try {
        let { idPais } = req.params
        let country = await Country.findByPk(
            idPais.toUpperCase(),
            { include: { model: Activities } }
        )
        country ? res.json(country) : res.sendStatus(404)
    } catch (error) {
        res.status(505).send(error)
    }
})


module.exports = router;
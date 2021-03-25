const router = require('express').Router();
const axios = require('axios')
const { Op } = require("sequelize");
const { Country, Activity, Season } = require('../db');

// // [ ] GET /countries?name="...":
// // Obtener los países que coincidan con el nombre pasado como query parameter (No necesariamente tiene que ser una matcheo exacto)
// // Si no existe ningún país mostrar un mensaje adecuado
// [ ] GET /countries:
// En una primera instancia deberán traer todos los países desde restcountries y guardarlos en su propia base de datos y luego ya utilizarlos desde allí (Debe almacenar solo los datos necesarios para la ruta principal)
// Obtener un listado de los primeros 10 países
router.get("/", async (req, res) => {
    let { name, page, sort } = req.query
    console.log(name, page, sort)
    try {
        if(page==="all"){
            console.log(name, page, sort)
            let country = await Country.findAll({
                include: { model: Activity },
            })
            return country ? res.json(country) : res.sendStatus(404)
        }
        if (page) {
            console.log(name, page, sort)
            console.log("entre")

            switch (sort) {
                case "AtoZ":
                    console.log(page)
                    return res.json(await Country.findAll({
                        order: [['name', 'ASC']],
                        include: {model: Activity,},
                        limit: 10,
                        offset: 10 * (page - 1)
                    }))
                case "ZtoA":
                    console.log(page,"ZtoA")

                    return res.json(await Country.findAll({
                        order: [['name', 'DESC']],
                        include: { model: Activity},
                        limit: 10,
                        offset: 10 * (page - 1)
                    }))
                case "pobAsc":
                    console.log(page)
                    return res.json(await Country.findAll({
                        order: [['population', 'ASC']],
                        include: {model: Activity},
                        limit: 10,
                        offset: 10 * (page - 1)
                    }))
                case "pobDes":
                    console.log(page,"sort")
                    return res.json(await Country.findAll({
                        order: [['population', 'DESC']],
                        include: {model: Activity},
                        limit: 10,
                        offset: 10 * (page - 1)
                    }))

                default:
                    console.log ("unsorted")
                    console.log(page)
                    return res.json(await Country.findAll({
                        include: { model: Activity },
                        limit: 10,
                        offset: 10 * (page - 1)
                    }))
            }
        }
        if (name) {
            console.log(name, page, sort)

            let country = await Country.findAll({
                include: { model: Activity },
                where: { name: { [Op.iLike]: `%${name}%` } }
            })
            return country ? res.json(country) : res.sendStatus(404)
        }
        else {

            let season = ["Winter", "Autumn", "Spring", "Summer"]
            await Promise.all(season.map((s) => Season.findOrCreate({ where: { name: s } })))
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
            return res.status(201).json("BD creada")
        }

    } catch (e) {
        res.status(505).send(e)
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
            { include: { model: Activity } }
        )
        country ? res.json(country) : res.sendStatus(404)
    } catch (error) {
        res.status(505).send(error)
    }
})


module.exports = router;
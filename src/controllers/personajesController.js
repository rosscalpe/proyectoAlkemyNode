const db = require('../database/models');
const { Op } = require("sequelize");

const personajesController = {
    list: (req, res) => {
        db.Personajes.findAll()
        .then (personaje => {
            return res.status(200).json({
                meta: personaje.length,
                data: personaje.forEach(p => {
                        p.imagen,
                        p.nombre 
                    
                }) 
            })
        })
        .catch(e => console.log(e))
    },
    detail: (req, res) => {
        let id = req.params.id
        db.Personajes.findByPk(id, {
            include: ['peliculas']
        })
        .then(personaje => {
            return res.status(200).json({
                data: personaje,
                peliculas: personaje.peliculas.forEach(p => p.titulo)
            })
        })
    },
    search: (req, res) => {
        db.Personajes.findAll({
            include: ['peliculas'],
            where: { 
                nombre: {[Op.like]: '%' + req.query.keyword + '%'}, 
                edad: {[Op.like]: '%' + req.query.keyword + '%'},
            //    movie: {[Op.like]: '%' + req.query.keyword + '%'}  
            }
        })
        .then((personaje) => {
            return res.status(200).json({
                data: personaje,
                pelicula: personaje.peliculas,
            })
        })
        .catch(e => console.log(e))
    },
    create: (req, res) => {
        db.Personajes.create({
            ...req.body
        })
        .then((personaje) => {
            return res.status(200).json({
                data: personaje
            })
            .catch(e => console.log(e))
        })
    },
    update: (req, res) => {
        let id = req.params.id
        db.Personajes.update({
            ...req.body
        }, {
            where: { id }
        })
        .then(personaje => {
            return res.status(200).json ({
                data: personaje
            })
        })
    },
    delete: (req, res) => {
        db.Personajes.destroy({
            where: {id: req.params.id}
        })
        .then(personaje => {
            return res.status(200).json({
                data: personaje
            })
        })
        .catch(e => console.log(e))
    }

}


module.exports = personajesController;
const db = require('../database/models');
const { Op } = require("sequelize");

const peliculasController = {
    list: (req, res) => {
        db.Peliculas.findAll()
        .then (pelicula => {
            return res.status(200).json({
                meta: pelicula.length,
                data: pelicula.forEach(p => {
                        p.imagen,
                        p.titulo, 
                        p.fecha_creacion 
                }) 
            })
        })
        .catch(e => console.log(e))
    },
    detail: (req, res) => {
        let id = req.params.id
        db.Peliculas.findByPk(id, {
            include: ['personajes']
        })
        .then(pelicula => {
            return res.status(200).json({
                data: pelicula,
                peliculas: pelicula.personajes.forEach(p => p.titulo)
            })
        })
    },
    search: (req, res) => {
        db.Peliculas.findAll({
            include: ['personajes', 'generos'],
            where: { 
                titulo: {[Op.like]: '%' + req.query.keyword + '%'}
            },
            order: [
                ['fecha_creacion', 'DESC']
            ]
        })
        .then((pelicula) => {
            return res.status(200).json({
                data: pelicula,
                personajes: pelicula.personajes,
                genero: pelicula.generos
            })
        })
        .catch(e => console.log(e))
    },
    create: (req, res) => {
        db.Peliculas.create({
            ...req.body
        })
        .then((pelicula) => {
            return res.status(200).json({
                data: pelicula
            })
            .catch(e => console.log(e))
        })
    },
    update: (req, res) => {
        let id = req.params.id
        db.Peliculas.update({
            ...req.body
        }, {
            where: { id }
        })
        .then(pelicula => {
            return res.status(200).json ({
                data: pelicula
            })
        })
    },
    delete: (req, res) => {
        db.Peliculas.destroy({
            where: {id: req.params.id}
        })
        .then(pelicula => {
            return res.status(200).json({
                data: pelicula
            })
        })
        .catch(e => console.log(e))
    }

}


module.exports = peliculasController;
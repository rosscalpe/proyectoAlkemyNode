const db = require('../database/models');
const { Op } = require("sequelize");
const { validationResult } = require("express-validator");

const peliculasController = {
    list: (req, res) => {
        db.Peliculas.findAll({
            attributes: ['imagen', 'titulo', 'fecha_creacion']
        })
        .then (pelicula => {
            return res.status(200).json({
                meta: {
                    long: pelicula.length,
                    status: 200,
                    ok: true
                },
                data: pelicula,
            })
        })
        .catch(e => console.log(e))
    },
    detail: (req, res) => {
        let id = req.params.id
        db.Peliculas.findByPk(id, {
            include: ['personajes', 'genero']
        })
        .then(pelicula => {
            return res.status(200).json({
                data: pelicula
            })
        })
    },
    search: (req, res) => {
        let searchUser = req.query
        db.Peliculas.findAll({
            include: ['personajes', 'genero'],
            where: { 
                titulo: {[Op.like]: '%' + searchUser + '%'},
                genero_id: genero
            },
            order: [
                ['fecha_creacion', 'DESC']
            ]
        })
        .then((pelicula) => {
            return res.status(200).json({
                data: pelicula,
                ok: true
            })
        })
        .catch(e => console.log(e))
    },
    create: (req, res) => {
        const { imagen, titulo, fecha_creacion, calificacion, genero_id } = req.body;
        
        const errores = validationResult(req);

        if (errores.errors.length) {
            return res.status(404).json({
              meta: {
                status: 404,
                ok: false,
              },
              errors: errores.mapped(),
            });
          }

        db.Peliculas.create({
            imagen, titulo, fecha_creacion, calificacion, genero_id
        })
        .then((pelicula) => {
            return res.status(200).json({
                meta: {
                    status: 200,
                    ok: true
                },
                data: pelicula
            })
            .catch(e => console.log(e))
        })
    },
    update: (req, res) => {
        let id = req.params.id

        const { imagen, titulo, fecha_creacion, calificacion, genero_id } = req.body;
        
        const errores = validationResult(req);

        if (errores.errors.length) {
            return res.status(404).json({
              meta: {
                status: 404,
                ok: false,
              },
              errors: errores.mapped(),
            });
          }
          const pelicula = db.Peliculas.findByPk(id)

        db.Peliculas.update({
            imagen: imagen || pelicula.imagen, titulo, fecha_creacion, calificacion, genero_id
        }, {
            where: { id }
        })
        .then(pelicula => {
            return res.status(200).json ({
                meta:{
                    status: 200,
                    ok: true
                },
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
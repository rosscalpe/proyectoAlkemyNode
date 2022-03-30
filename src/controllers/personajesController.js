const db = require('../database/models');
const { Op } = require("sequelize");
const { validationResult } = require("express-validator")

const personajesController = {
    list: (req, res) => {
        db.Personajes.findAll({
            attributes: ['imagen', 'nombre']
        })
        .then (personaje => {
            return res.status(200).json({
                meta: {
                    total: personaje.length,
                    status: 200,
                    url: "http://localhost:3000/characters"
                },
                data: personaje
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
                url: "http://localhost:3000/characters/:id"
            })
        })
    },
    search: (req, res) => {
        db.Personajes.findAll({
            include: ['peliculas'],
            where: { 
                nombre: {[Op.like]: '%' + req.query + '%'}, 
                edad: {[Op.like]: '%' + req.query + '%'},
                movie: {[Op.like]: '%' + req.query + '%'}  
            }
        })
        .then((personaje) => {
            return res.status(200).json({
                meta:{
                    total: personaje.length,
                    status: 200,
                    url: "http://localhost:3000/characters/search?"
                },
                data: personaje,
                pelicula: personaje.peliculas,
            })
        })
        .catch(e => console.log(e))
    },
    create: (req, res) => {
        const { imagen, nombre, edad, peso, historia } = req.body;

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

        db.Personajes.create({
            imagen, nombre, edad, peso, historia
        })
        .then((personaje) => {
            return res.status(200).json({
                meta: {
                    status: 200,
                    ok: true,
                    url: "http://localhost:3000/characters/create"
                },
                data: personaje,
            })
            .catch(e => console.log(e))
        })
    },
    update: (req, res) => {
        let id = req.params.id;

        const { imagen, nombre, edad, peso, historia } = req.body;

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
        const personaje = db.Personajes.findByPk(id);

        db.Personajes.update({
            imagen: imagen || personaje.imagen, nombre, edad, peso, historia
        }, {
            where: { id }
        })
        .then(personaje => {
            return res.status(200).json ({
                meta: {
                    status: 200,
                    ok: true,
                    url: "http://localhost:3000/characters/edit/:id"
                },
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
                meta: {
                    status: 200,
                    ok: true,
                    url: "http://localhost:3000/characters/delete/:id"
                },
                data: personaje
            })
        })
        .catch(e => console.log(e))
    }
}


module.exports = personajesController;
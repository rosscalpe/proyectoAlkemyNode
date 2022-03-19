const express = require('express');
const router = express.Router();
const controller = require('../controllers/peliculasController');

const validacionPelicula = require('../validations/validacionesCrearPelicula');
const validacionPeliculaEdit = require('../validations/validacionModificarPelicula');

//peliculas
router.get('/', controller.list);
router.get('/:id', controller.detail);
router.get('/search', controller.search);
//CRUD
router.post('/create', validacionPelicula, controller.create);
router.put('/edit/:id', validacionPeliculaEdit, controller.update);
router.delete('/delete/:id', controller.delete);

module.exports = router;
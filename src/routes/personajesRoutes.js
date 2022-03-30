const express = require('express');
const router = express.Router();
const controller = require('../controllers/personajesController');

const validacionPersonajes = require('../validations/validacionesCrearPersonaje');
const validacionPersonajeEdit = require('../validations/ValidacionModificarPersonaje');

//personajes
router.get('/', controller.list);
router.get('/:id', controller.detail);
router.get('/search?', controller.search)
//CRUD
router.post('/create', validacionPersonajes, controller.create);
router.put('/edit/:id', validacionPersonajeEdit, controller.update);
router.delete('/delete/:id', controller.delete);


module.exports = router
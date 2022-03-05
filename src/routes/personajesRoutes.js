const express = require('express');
const router = express.Router();
const controller = require('../controllers/personajesController')

//personajes
router.get('/', controller.list);
router.get('/:id', controller.detail);
router.get('/?', controller.search)
//CRUD
router.post('/create', controller.create);
router.put('/edit/:id', controller.update);
router.delete('/delete/:id', controller.delete);


module.exports = router
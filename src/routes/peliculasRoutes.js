const express = require('express');
const router = express.Router();
const controller = require('../controllers/peliculasController');

//peliculas
router.get('/', controller.list);
router.get('/:id', controller.detail)
//CRUD
router.post('/create', controller.create);
router.put('/edit/:id', controller.update);
router.delete('/delete/:id', controller.delete);

module.exports = router;
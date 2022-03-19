const express = require('express');
const router = express.Router();
const controller = require('../controllers/loginController')

const validacionLogin = require('../validations/validacionesLogin');
const validacionRegister = require('../validations/validacionesRegister');

router.post('/register', validacionRegister, controller.register);
router.post('/login',validacionLogin, controller.login);


module.exports = router
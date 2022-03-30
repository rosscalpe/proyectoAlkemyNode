const { body } = require('express-validator');

const validationLogin = [
    body('email').notEmpty().withMessage('Debe completar este campo').isEmail().withMessage('Debe ser un email válido'),
    body('contraseña').notEmpty().withMessage('Debe completar este campo').isLength({min: 8}),
];

module.exports = validationLogin;
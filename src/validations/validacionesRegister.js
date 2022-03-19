const { body }= require('express-validator');

const validationRegister =[
    body('email').notEmpty().withMessage('Debe completar este campo').isEmail().withMessage('Debe escribir un email válido'),
    body('contraseña').notEmpty().withMessage('Debe completar este campo').isStrongPassword({
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minSymbols: 1,
        minNumbers: 1
    }).withMessage('Debe tener mínimo 8 caracteres')
]
module.exports = validationRegister;
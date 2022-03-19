const { body } = require('express-validator');

const validationCharacterCreate = [
    body("nombre")
    .notEmpty()
    .withMessage('"Nombre" no puede estar vacío')
    .isString()
    .withMessage('"Nombre" debe ser una cadena de texto')
    .bail()
    .isLength({ min: 3 })
    .withMessage('"Nombre" debe tener mínimo 3 letras'),

    body("imagen")
    .optional({ nullable: true }) // Puede estar nullo al momento que se obtiene el request
    .default("https://tentulogo.com/wp-content/uploads/2017/09/disney-logo.jpg")
    .isString()
    .withMessage('"Imagen" debe ser una cadena de texto')
    .bail()
    .matches(/^(ftp|http|https):\/\/[^ "]+$/)
    .withMessage('"Imagen" debe ser una url válida'),

    body("edad")
    .optional({ nullable: true }) // Puede estar nullo al momento que se obtiene el request
    .isNumeric()
    .withMessage('"Edad" solo puede ser en números'),

    body("peso")
    .optional({ nullable: true }) // Puede estar nullo al momento que se obtiene el request
    .isNumeric()
    .withMessage('"peso" solo puede ser en números'),

    body("historia")
    .optional({ nullable: true }) // Puede estar nullo al momento que se obtiene el request
    .isString()
    .withMessage('"Historia" debe ser solo texto')
    .isLength({ min: 10 })
    .withMessage('"Nombre" debe tener mínimo 10 letras'),
]

module.exports = validationCharacterCreate;
const { body } = require('express-validator');

const validationMovieCreate = [
    body("titulo")
    .notEmpty()
    .withMessage('"Titulo" no puede estar vacío')
    .isString()
    .withMessage('"Titulo" debe ser una cadena de texto')
    .bail()
    .isLength({ min: 4 })
    .withMessage('"Titulo" debe tener mínimo 4 letras'),

    body("imagen")
    .optional({ nullable: true }) // Puede estar nullo al momento que se obtiene el request
    .default("https://tentulogo.com/wp-content/uploads/2017/09/disney-logo.jpg")
    .isString()
    .withMessage('"Imagen" debe ser una cadena de texto')
    .bail()
    .matches(/^(ftp|http|https):\/\/[^ "]+$/)
    .withMessage('"Imagen" debe ser una url válida'),

    body("fecha_creacion")
    .optional({ nullable: true }) // Puede estar nullo al momento que se obtiene el request
    .isDate({ format: "YYYY-MM-DD" })
    .withMessage('"Fecha de creación" es un formato de fecha inválido (formato válido: YYYY-MM-DD)'),

    body("calificación")
    .optional({ nullable: true }) // Puede estar nullo al momento que se obtiene el request
    .isNumeric()
    .withMessage('"Calificación" solo puede ser en números')
    .bail()
    .isIn([1, 2, 3, 4, 5]) // Debe contener estos valores sino envia el error
    .withMessage('"Quealify" must be between 1 and 5'),

    body("genero_id")
    .notEmpty()
    .withMessage('"Género" no puede estar vacío')
    .isNumeric()
    .withMessage('"Género" debe ser un número')
]

module.exports = validationMovieCreate;
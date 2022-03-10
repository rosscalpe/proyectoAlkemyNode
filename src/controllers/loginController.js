const db = require("../database/models");
const bcrypt = require("bcryptjs");
const jtk = require("jsonwebtoken");
const { transport } = require("../mailer/mailer")
const { validationResult } = require("express-validator");

const loginController = {
    register: (req, res) => {
        const errores = validationResult(req);
        const { email, contraseña } = req.body;

        if(errores.errors.length){
            return res.status(404).json({
                meta: { 
                    status: 404,
                    ok: false
                },
                errors: errores.mapped()
            })
        } else {
            db.Usuarios.create({
                email,
                contraseña: bcrypt.hashSync(contraseña, 12)
            })
            .then(usuario => {
                res.status(200).json({
                    meta: {
                        status: 200,
                        ok: true,
                        msg: "usuario creado"
                    },
                    data: usuario
                })
            });

            // transport.mailer({
            //     from: "<rossmycalderon@hotmail.com>",
            //     to: email,
            //     subject: "Se registró exitosamente"
            // })
            // .catch(e => console.log(e))
        }
    },
    login: (req, res) => {
        const errores = validationResult(req);

        if(errores.errors.length){
            return res.status(404).json({
                meta: { 
                    status: 404,
                    ok: false
                },
                errors: errores.mapped()
            })
        }    

        const usuario = db.Usuarios.findOne({
            where: { email: req.body.email }
        });

        // const token = jtk.sign({
        //     id: usuario.id,
        //     usuario: usuario.email
        // }, process.env.TOKEN_SECRET);

        // return res.header("token-autenticacion", token).json({
        //     data: { token },
        //     ok: true
        // })
    }

}
module.exports = loginController;
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
                email: email,
                contraseña: bcrypt.hashSync(contraseña, 12)
            })
            .then(usuario => {
                res.status(200).json({
                    meta: {
                        status: 200,
                        ok: true,
                        msg: "usuario creado",
                        url: "http://localhost:3000/auth/register"
                    },
                    data: usuario
                })
            }).catch(e => console.log(e))

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
        if(usuario){
            let checkPassword = bcrypt.compare(req.body.contraseña, usuario.contraseña);
            if(checkPassword){
                let token = jtk.sign({
                    id: usuario.id,
                    email: usuario.email
                }, "secret", { expiresIn: "1h" });
                res.status(200).json({
                    meta: {
                        status: 200,
                        ok: true,
                        msg: "usuario logueado",
                        url: "http://localhost:3000/auth/login" 
                    },
                    data: {
                        token,
                        usuario
                    }
                })
            }else{
                return res.status(404).json({
                    status: 404,
                    errors:  'credenciales inválidas',
                    ok: false
                })
            }
        }
        return res.status(404).json({
            status: 404,
            errors:  'Este mail no se encuentra registrado',
            ok: false
        })
    }

}
module.exports = loginController;
"use strict";
// USUARIO CONTROLLERS
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("./../config/sequelize");
const SubirArchivoFirebase_1 = require("../utils/SubirArchivoFirebase");
const crypto = require('crypto');
exports.usuario_controller = {
    login: (req, res) => {
        let { usu_email, usu_pass } = req.body;
        // findOne => 
        sequelize_1.Usuario.findOne({
            where: {
                usu_email: usu_email,
                usu_eliminar: 0
            }
        }).then((objUsuario) => {
            if (objUsuario) {
                // el usuario existe => validar la contra
                let valid = objUsuario.validPassword(usu_pass);
                if (valid) {
                    // contrasenia correcta
                    let token = objUsuario.generateJWT();
                    let response = {
                        message: 'ok',
                        token: token
                    };
                    res.status(201).json(response);
                }
                else {
                    // contrasenia incorrecta
                    let response = {
                        message: 'error',
                        content: 'Usuario o password incorrecto'
                    };
                    res.status(200).json(response);
                }
            }
            else {
                // si es null
                let response = {
                    message: 'error',
                    content: 'Usuario o password incorrecto'
                };
                res.status(200).json(response);
            }
        }).catch((error) => {
            console.log("Error => " + error);
        });
    },
    getAll: (req, res) => {
        sequelize_1.Usuario.findAll().then((usuario) => {
            if (usuario) {
                res.status(201).json({
                    message: 'Ok',
                    content: usuario
                });
            }
            else {
                res.status(200).json({
                    message: 'Error',
                    content: 'Error al traer usuarios'
                });
            }
        }).catch((error) => {
            console.log("Error => " + error);
        });
    },
    getByEmail: (req, res) => {
        let { correo } = req.params;
        sequelize_1.Usuario.findAll({ where: { usu_email: correo } }).then((usuario) => {
            if (usuario) {
                res.status(201).json({
                    message: 'Ok',
                    content: usuario
                });
            }
            else {
                res.status(200).json({
                    message: 'Error',
                    content: 'Usuario no encontrado'
                });
            }
        }).catch((error) => {
            console.log("Error => " + error);
        });
    },
    getById: (req, res) => {
        let { id } = req.params;
        sequelize_1.Usuario.findAll({ where: { usu_id: id } }).then((usuario) => {
            if (usuario) {
                res.status(201).json({
                    message: 'Ok',
                    content: usuario
                });
            }
            else {
                res.status(200).json({
                    message: 'Error',
                    content: 'Usuario no encontrado'
                });
            }
        }).catch((error) => {
            console.log("Error => " + error);
        });
    },
    create: (req, res) => {
        let imagen = req.file;
        if (imagen) {
            SubirArchivoFirebase_1.subirArchivo(imagen, 'usuarios').then((link) => {
                let { usu_email, usu_nom, usu_ape, usu_tel, usu_pass, usu_tipo } = req.body;
                let parametros = {
                    usu_email,
                    usu_nom,
                    usu_ape,
                    usu_tel,
                    usu_pass,
                    usu_tipo,
                    usu_img: link[0]
                };
                sequelize_1.Usuario.findAll({
                    where: {
                        usu_email
                    }
                }).then((usuarios) => {
                    if (usuarios.length === 0) {
                        // -- AQUI -- //
                        // Instanciando un objeto del modelo Usuario
                        let objUsuario = sequelize_1.Usuario.build(parametros);
                        objUsuario.setSaltAndHash(req.body.usu_pass);
                        objUsuario.save().then((usuarioCreado) => {
                            let token = usuarioCreado.generateJWT();
                            if (usuarioCreado && token) {
                                let response = {
                                    message: 'created',
                                    content: usuarioCreado,
                                    token: token,
                                };
                                res.status(201).json(response);
                            }
                            else {
                                let response = {
                                    message: 'error',
                                    content: 'Erro al crear el usuario y/o token',
                                };
                                res.status(200).json(response);
                            }
                        });
                        // </aqui>
                    }
                    else {
                        let response = {
                            message: 'error',
                            content: `El usuario con email ${req.body.usu_email} ya existe`,
                        };
                        res.status(200).json(response);
                    }
                });
            });
        }
        else {
            let { usu_email } = req.body;
            sequelize_1.Usuario.findAll({
                where: {
                    usu_email
                }
            }).then((usuarios) => {
                if (usuarios.length === 0) {
                    // -- AQUI -- //
                    // Instanciando un objeto del modelo Usuario
                    let objUsuario = sequelize_1.Usuario.build(req.body);
                    objUsuario.setSaltAndHash(req.body.usu_pass);
                    objUsuario.save().then((usuarioCreado) => {
                        let token = usuarioCreado.generateJWT();
                        if (usuarioCreado && token) {
                            let response = {
                                message: 'created',
                                content: usuarioCreado,
                                token: token,
                            };
                            res.status(201).json(response);
                        }
                        else {
                            let response = {
                                message: 'error',
                                content: 'Error al crear el usuario y/o token',
                            };
                            res.status(200).json(response);
                        }
                    });
                    // </aqui>
                }
                else {
                    let response = {
                        message: 'error',
                        content: `El usuario con email ${req.body.usu_email} ya existe`,
                    };
                    res.status(200).json(response);
                }
            });
        }
    },
    getUsuImg: (req, res) => {
        let { id } = req.params;
        sequelize_1.Usuario.findOne({
            where: {
                usu_id: id
            },
            attributes: ['usu_img']
        }).then((usuario) => {
            if (usuario) {
                res.status(201).json({
                    message: 'Ok',
                    content: usuario
                });
            }
            else {
                res.status(200).json({
                    message: 'Error',
                    content: 'Error al traer usuario'
                });
            }
        }).catch((error) => {
            console.log("Error => " + error);
        });
    },
    upDateById: (req, res) => {
        let imagen = req.file;
        if (imagen) {
            SubirArchivoFirebase_1.subirArchivo(imagen, 'usuarios').then((link) => {
                let { usu_email, usu_nom, usu_ape, usu_tel, usu_pass, usu_tipo } = req.body;
                let parametros = {
                    usu_email,
                    usu_nom,
                    usu_ape,
                    usu_tel,
                    usu_pass,
                    usu_tipo,
                    usu_img: link[0]
                };
                let { id } = req.params;
                sequelize_1.Usuario.update(parametros, {
                    where: { usu_id: id }
                }).then((usuario) => {
                    if (usuario) {
                        res.status(201).json({
                            message: 'Ok',
                            content: usuario
                        });
                    }
                    else {
                        res.status(200).json({
                            message: 'Error',
                            content: 'Error al actualizar usuario'
                        });
                    }
                }).catch((error) => {
                    console.log("Error => " + error);
                });
            });
        }
        else {
            let { id } = req.params;
            sequelize_1.Usuario.update(req.body, {
                where: { usu_id: id }
            }).then((usuario) => {
                if (usuario) {
                    res.status(201).json({
                        message: 'Ok',
                        content: usuario
                    });
                }
                else {
                    res.status(200).json({
                        message: 'Error',
                        content: 'Error al actualizar usuario'
                    });
                }
            }).catch((error) => {
                console.log("Error => " + error);
            });
        }
    },
    updatePassword: (req, res) => {
        let { usu_id, usu_pass } = req.body;
        let usu_salt = crypto.randomBytes(16).toString('hex');
        let usu_hash = crypto.pbkdf2Sync(usu_pass, usu_salt, 1000, 64, 'sha512').toString('hex');
        sequelize_1.Usuario.update({ usu_salt, usu_hash, password: usu_pass }, {
            where: { usu_id }
        }).then((usuario) => {
            if (usuario) {
                res.status(201).json({
                    message: 'Ok',
                    content: usuario
                });
            }
            else {
                res.status(200).json({
                    message: 'Error',
                    content: 'Error al actualizar usuario'
                });
            }
        }).catch((error) => {
            console.log("Error => " + error);
        });
    }
};

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("../config/sequelize");
const Sequelize = require('sequelize');
var path_module = require('path');
var fs = require('fs');
const Op = Sequelize.Op;
exports.miniBodegas_controller = {
    getAll: (req, res) => {
        sequelize_1.miniBodegas.findAll({
            where: {
                eliminar: 0
            }
        }).then((miniBodega) => {
            if (miniBodega) {
                res.status(201).json({
                    message: 'Ok',
                    content: miniBodega
                });
            }
            else {
                res.status(400).json({
                    message: 'Error',
                    content: 'Error al traer la bodega'
                });
            }
        }).catch((error) => {
            console.log("Error => " + error);
        });
    },
    getMinibodegabyId: (req, res) => {
        let { id } = req.params;
        sequelize_1.miniBodegas.findByPk(id).then((miniBodega) => {
            if (miniBodega) {
                res.status(201).json({
                    message: 'Ok',
                    content: miniBodega
                });
            }
            else {
                res.status(400).json({
                    message: 'Error',
                    content: 'Error al traer la bodega'
                });
            }
        }).catch((error) => {
            console.log("Error => " + error);
        });
    },
    getOne: (req, res) => {
        let { id } = req.params;
        sequelize_1.miniBodegas.findOne({
            where: {
                idOperador: id
            },
            include: [
                {
                    model: sequelize_1.instalaciones
                }
            ]
        }).then((miniBodega) => {
            if (miniBodega) {
                res.status(201).json({
                    message: 'Ok',
                    content: miniBodega
                });
            }
            else {
                res.status(400).json({
                    messag: 'Error',
                    content: 'Error al traer la mini bodega'
                });
            }
        }).catch((error) => {
            console.log("Error=> " + error);
        });
    },
    create: (req, res) => {
        let { usu_id, nombreOperador, paginaWeb, region, comuna, telefono, email, direccion } = req.body;
        console.log(usu_id);
        console.log(req.body);
        sequelize_1.miniBodegas.create({
            usu_id: usu_id,
            nombreOperador: nombreOperador,
            paginaWeb: paginaWeb,
            region: region,
            comuna: comuna,
            telefono: telefono,
            email: email,
            direccion: direccion
        }).then((miniBodega) => {
            if (miniBodega) {
                res.status(201).json({
                    message: 'Ok',
                    content: miniBodega
                });
            }
            else {
                res.status(400).json({
                    messag: 'Error',
                    content: 'Error al traer la mini bodega'
                });
            }
        }).catch((error) => {
            console.log("Error=> " + error);
        });
        // let objminibodega = miniBodegas.build(req.body);
        // objminibodega.save().then((miniBodega: any) => {
        //     if (miniBodega) {
        //         res.status(201).json({
        //             message: 'Ok',
        //             content: miniBodega
        //         })
        //     } else {
        //         res.status(400).json({
        //             messag: 'Error',
        //             content: 'Error al traer la mini bodega'
        //         })
        //     }
        // }).catch((error: any) => {
        //     console.log("Error=> " + error)
        // })
    },
    getMinibodegabyUsuId: (req, res) => {
        let { id } = req.params;
        sequelize_1.miniBodegas.findAll({
            include: [{
                    model: sequelize_1.Usuario,
                    where: {
                        usu_id: id
                    }
                }]
        }).then((miniBodega) => {
            if (miniBodega) {
                res.status(201).json({
                    message: 'Ok',
                    content: miniBodega
                });
            }
            else {
                res.status(400).json({
                    messag: 'Error',
                    content: 'Error al traer la mini bodega'
                });
            }
        }).catch((error) => {
            console.log("Error=> " + error);
        });
    },
    UpdateById: (req, res) => {
        let { idOperador } = req.body;
        sequelize_1.miniBodegas.update(req.body, {
            where: { idOperador: idOperador }
        }).then((miniBodega) => {
            if (miniBodega) {
                res.status(201).json({
                    message: 'Ok',
                    content: miniBodega
                });
            }
            else {
                res.status(200).json({
                    message: 'Error',
                    content: 'Error al actualizar MiniBodega'
                });
            }
        }).catch((error) => {
            console.log("Error => " + error);
        });
    },
    getAllNameandID: (req, res) => {
        sequelize_1.miniBodegas.findAll({
            attributes: ['id', 'nombre'],
            where: {
                eliminar: 0
            }
        }).then((instalacion) => {
            if (instalacion) {
                res.status(201).json({
                    message: 'Ok',
                    content: instalacion
                });
            }
            else {
                res.status(400).json({
                    message: 'Error',
                    content: 'Error al traer las minibodegas'
                });
            }
        }).catch((error) => {
            console.log("Error => " + error);
        });
    }
};

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("./../config/sequelize");
exports.unidades_controller = {
    getOne: (req, res) => {
        let { idUnidad } = req.params;
        sequelize_1.unidades.findOne({
            where: {
                idUnidad
            },
            include: [{
                    model: sequelize_1.caracteristicas
                }]
        }).then((unidad) => {
            if (unidad) {
                res.status(201).json({
                    message: 'Ok',
                    content: unidad
                });
            }
            else {
                res.status(200).json({
                    message: 'Error',
                    content: 'Error al traer unidades'
                });
            }
        }).catch((error) => {
            console.log("Error => " + error);
        });
    },
    updateById: (req, res) => {
        let { idUnidad } = req.body;
        sequelize_1.unidades.update(req.body.unidad, {
            where: {
                idUnidad
            }
        }).then((unidad) => {
            sequelize_1.caracteristicas.update(req.body.caracteristicas, {
                where: {
                    id_unidad: idUnidad
                }
            }).then((caracteristicas) => {
                if (unidad && caracteristicas) {
                    res.status(201).json({
                        message: 'Ok',
                        content: { unidad }
                    });
                }
                else {
                    res.status(200).json({
                        message: 'Error',
                        content: 'Error al actualizar unidades'
                    });
                }
            }).catch((error) => {
                console.log("Error => " + error);
            });
        }).catch((error) => {
            console.log("Error => " + error);
        });
    },
    deleteAndVisibleById: (req, res) => {
        let { idUnidad } = req.body;
        sequelize_1.unidades.update(req.body, {
            where: {
                idUnidad
            }
        }).then((unidad) => {
            if (unidad) {
                res.status(201).json({
                    message: 'Ok',
                    content: { unidad }
                });
            }
            else {
                res.status(200).json({
                    message: 'Error',
                    content: 'Error al actualizar unidades'
                });
            }
        }).catch((error) => {
            console.log("Error => " + error);
        });
    }
};

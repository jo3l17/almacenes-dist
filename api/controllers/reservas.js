"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("./../config/sequelize");
exports.reservas_controller = {
    getById: (req, res) => {
        let { idReserva } = req.params;
        sequelize_1.reserva.findOne({
            where: { idReserva },
            include: [{
                    model: sequelize_1.unidades,
                    include: [{
                            model: sequelize_1.instalaciones,
                            include: [{
                                    model: sequelize_1.galeria
                                }]
                        },
                        {
                            model: sequelize_1.caracteristicas
                        }]
                }]
        }).then((reserva) => {
            if (reserva) {
                res.status(201).json({
                    message: 'Ok',
                    content: reserva
                });
            }
            else {
                res.status(200).json({
                    message: 'Error',
                    content: 'Error al traer reservas'
                });
            }
        }).catch((error) => {
            console.log("Error => " + error);
        });
    },
    updateById: (req, res) => {
        let { idReserva } = req.body;
        sequelize_1.reserva.update(req.body, {
            where: {
                idReserva
            }
        }).then((reserva) => {
            if (reserva) {
                res.status(201).json({
                    message: 'Ok',
                    content: reserva
                });
            }
            else {
                res.status(200).json({
                    message: 'Error',
                    content: 'Error al actualizar reservas'
                });
            }
        }).catch((error) => {
            console.log("Error => " + error);
        });
    }
};

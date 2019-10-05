"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("../config/sequelize");
const Sequelize = require('sequelize');
var path_module = require('path');
var fs = require('fs');
const Op = Sequelize.Op;
exports.instalaciones_controller = {
    getById: (req, res) => {
        let { id } = req.params;
        sequelize_1.instalaciones.findByPk(id).then((instalacion) => {
            if (instalacion) {
                res.status(201).json({
                    message: 'Ok',
                    content: instalacion
                });
            }
            else {
                res.status(400).json({
                    message: 'Error',
                    content: 'Error al traer los almacenes'
                });
            }
        }).catch((error) => {
            console.log("Error => " + error);
        });
    },
    getAll: (req, res) => {
        sequelize_1.instalaciones.findAll({
            include: [
                {
                    model: sequelize_1.miniBodegas
                },
                {
                    model: sequelize_1.instAmn,
                    include: [{
                            model: sequelize_1.amenidades
                        }]
                },
                {
                    model: sequelize_1.unidades
                }
            ]
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
                    content: 'Error al traer los almacenes'
                });
            }
        }).catch((error) => {
            console.log("Error => " + error);
        });
    },
    getByBusqueda: (req, res) => {
        let { busqueda } = req.query;
        sequelize_1.instalaciones.findAll({
            include: [
                {
                    model: sequelize_1.miniBodegas
                },
            ],
            where: {
                direccionInstalacion: {
                    [Op.like]: '%' + busqueda + '%'
                }
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
                    content: 'Error al traer los almacenes'
                });
            }
        }).catch((error) => {
            console.log("Error => " + error);
        });
    },
    getByLatLng: (req, res) => {
        let { lat, lng, miles } = req.params;
        sequelize_1.sequelize.query("SELECT *, (3959*acos(cos(radians(" + lat + "))*cos(radians(latitud_instalacion))*cos(radians(longitud_instalacion)-radians(" + lng + "))+sin(radians(" + lat + "))*sin(radians(latitud_instalacion)))) AS distance" +
            " FROM t_instalaciones" +
            " LEFT OUTER JOIN `t_miniBodegas` AS `t_miniBodega` ON `t_instalaciones`.`id_operador` = `t_miniBodega`.`id_operador`" +
            " LEFT OUTER JOIN`t_instalacion_amenidad` AS `t_instalacion_amenidads`" +
            " ON`t_instalaciones`.`id_instalacion` = `t_instalacion_amenidads`.`id_instalacion`" +
            " LEFT OUTER JOIN `t_amenidades` AS `t_instalacion_amenidads->t_amenidade`" +
            " ON `t_instalacion_amenidads`.`id_amenidad` = `t_instalacion_amenidads->t_amenidade`.`id_amenidad`" +
            " LEFT OUTER JOIN `t_unidades` AS `t_unidades` ON `t_instalaciones`.`id_instalacion` = `t_unidades`.`id_instalacion`" +
            " HAVING distance < " + miles +
            " ORDER BY t_instalaciones.id_instalacion").then((instalacion) => {
            if (instalacion) {
                res.status(201).json({
                    message: 'Ok',
                    content: instalacion[0]
                });
            }
            else {
                res.status(400).json({
                    message: 'Error',
                    content: 'Error al traer los almacenes'
                });
            }
        }).catch((error) => {
            console.log("Error => " + error);
        });
    },
    getByBounds: (req, res) => {
        let { minLat, maxLat, minLng, maxLng } = req.params;
        sequelize_1.instalaciones.findAll({
            include: [
                {
                    model: sequelize_1.miniBodegas
                },
                {
                    model: sequelize_1.instAmn,
                    include: [{
                            model: sequelize_1.amenidades
                        }]
                },
                {
                    model: sequelize_1.unidades
                }
            ],
            where: {
                longitudInstalacion: {
                    [Op.between]: [minLng, maxLng],
                },
                [Op.and]: {
                    latitudInstalacion: {
                        [Op.between]: [minLat, maxLat],
                    }
                }
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
                    content: 'Error al traer los almacenes'
                });
            }
        }).catch((error) => {
            console.log("Error => " + error);
        });
    },
    PorMedida: (req, res) => {
        let { minLat, maxLat, minLng, maxLng, minMedida, maxMedida } = req.params;
        sequelize_1.instalaciones.findAll({
            include: [
                {
                    model: sequelize_1.miniBodegas
                },
                {
                    model: sequelize_1.instAmn,
                    include: [{
                            model: sequelize_1.amenidades
                        }]
                },
                {
                    model: sequelize_1.unidades,
                    where: {
                        areaTotal: {
                            [Op.between]: [minMedida, maxMedida]
                        }
                    }
                }
            ],
            where: {
                longitudInstalacion: {
                    [Op.between]: [minLng, maxLng],
                },
                [Op.and]: {
                    latitudInstalacion: {
                        [Op.between]: [minLat, maxLat],
                    }
                }
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
                    content: 'Error al traer los almacenes'
                });
            }
        }).catch((error) => {
            console.log("Error => " + error);
        });
    }
};

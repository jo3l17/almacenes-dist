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
    getOne: (req, res) => {
        let { id } = req.params;
        sequelize_1.instalaciones.findOne({
            where: {
                idInstalacion: id
            },
            include: [
                {
                    model: sequelize_1.miniBodegas
                },
                {
                    model: sequelize_1.galeria,
                    where: {
                        eliminar: false,
                    },
                    required: false
                },
                {
                    model: sequelize_1.horarios,
                    required: false
                },
                {
                    model: sequelize_1.unidades,
                    where: {
                        eliminar: 0,
                    },
                    required: false,
                    include: [{
                            model: sequelize_1.caracteristicas
                        }]
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
    getAll: (req, res) => {
        sequelize_1.instalaciones.findAll({
            include: [
                {
                    model: sequelize_1.miniBodegas
                },
                {
                    model: sequelize_1.galeria,
                    where: {
                        eliminar: false,
                    },
                    required: false
                },
                {
                    model: sequelize_1.unidades,
                    where: {
                        eliminar: 0,
                    },
                    required: false
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
                {
                    model: sequelize_1.galeria
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
    getByLatLng1: (req, res) => {
        let { lat, lng, distance } = req.params;
        let distance1 = sequelize_1.sequelize.col('distance');
        sequelize_1.instalaciones.findAll({
            attributes: [[sequelize_1.sequelize.literal("6371 * acos(cos(radians(" + lat + ")) * cos(radians(latitud_instalacion)) * cos(radians(" + lng + ") - radians(longitud_instalacion)) + sin(radians(" + lat + ")) * sin(radians(latitud_instalacion)))"), 'distance']],
            order: sequelize_1.sequelize.col('distance'),
            limit: 10,
            include: [
                {
                    model: sequelize_1.miniBodegas
                },
                {
                    model: sequelize_1.galeria
                },
                {
                    model: sequelize_1.unidades,
                    where: {
                        eliminar: 0,
                        Visible: 0
                    },
                    required: false
                }
            ],
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
    getByBounds: (req, res) => {
        let { minLat, maxLat, minLng, maxLng } = req.params;
        sequelize_1.instalaciones.findAll({
            include: [
                {
                    model: sequelize_1.miniBodegas
                },
                {
                    model: sequelize_1.galeria,
                    where: {
                        eliminar: false,
                    },
                    required: false
                },
                {
                    model: sequelize_1.unidades,
                    where: {
                        eliminar: 0,
                        Visible: 0
                    },
                    required: false
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
                    model: sequelize_1.galeria,
                    where: {
                        eliminar: false,
                    },
                    required: false
                },
                {
                    model: sequelize_1.unidades,
                    where: {
                        areaTotal: {
                            [Op.between]: [minMedida, maxMedida]
                        },
                        eliminar: 0,
                        Visible: 0
                    },
                    required: false
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
    porAmenidad: (req, res) => {
        let { minLat, maxLat, minLng, maxLng, clima, acceso, piso } = req.params;
        sequelize_1.instalaciones.findAll({
            include: [
                {
                    model: sequelize_1.miniBodegas
                },
                {
                    model: sequelize_1.galeria,
                    where: {
                        eliminar: false,
                    },
                    required: false
                },
                {
                    model: sequelize_1.unidades,
                    where: {
                        eliminar: 0,
                        Visible: 0
                    },
                    required: true,
                    include: [{
                            model: sequelize_1.caracteristicas,
                            where: {
                                [Op.or]: [
                                    { climaControlado: clima },
                                    { acceso24Horas: acceso },
                                    { piso1: piso }
                                ]
                            }
                        }]
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
    porAmenidadYMedida: (req, res) => {
        let { minLat, maxLat, minLng, maxLng, minMedida, maxMedida, clima, acceso, piso } = req.params;
        sequelize_1.instalaciones.findAll({
            include: [
                {
                    model: sequelize_1.miniBodegas
                },
                {
                    model: sequelize_1.galeria,
                    where: {
                        eliminar: false,
                    },
                    required: false
                },
                {
                    model: sequelize_1.unidades,
                    required: true,
                    where: {
                        eliminar: 0,
                        Visible: 0,
                        areaTotal: {
                            [Op.between]: [minMedida, maxMedida]
                        }
                    },
                    include: [{
                            model: sequelize_1.caracteristicas,
                            where: {
                                [Op.or]: [
                                    { climaControlado: clima },
                                    { acceso24Horas: acceso },
                                    { piso1: piso }
                                ]
                            }
                        }]
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
    getAllByUsuId: (req, res) => {
        let { usuId } = req.params;
        sequelize_1.instalaciones.findAll({
            where: {
                usuId
            },
            include: [
                {
                    model: sequelize_1.visitasInstalaciones
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
    UpdateById: (req, res) => {
        let { idInstalacion } = req.body;
        sequelize_1.instalaciones.update(req.body, {
            where: { idInstalacion: idInstalacion }
        }).then((Instalacion) => {
            if (Instalacion) {
                res.status(201).json({
                    message: 'Ok',
                    content: Instalacion
                });
            }
            else {
                res.status(200).json({
                    message: 'Error',
                    content: 'Error al actualizar Instalacion'
                });
            }
        }).catch((error) => {
            console.log("Error => " + error);
        });
    },
    getAllNameandID: (req, res) => {
        let { id_operador } = req.params;
        sequelize_1.instalaciones.findAll({
            attributes: ['id', 'nombre_instalacion'],
            where: {
                id_operador,
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
                    content: 'Error al traer los almacenes'
                });
            }
        }).catch((error) => {
            console.log("Error => " + error);
        });
    },
    getThefirst: (req, res) => {
        sequelize_1.instalaciones.findOne().then((instalacion) => {
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

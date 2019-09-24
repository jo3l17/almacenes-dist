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
            include: [{
                    model: sequelize_1.miniBodegas
                }]
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
            include: [{
                    model: sequelize_1.miniBodegas
                }],
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
        sequelize_1.sequelize.query(`SELECT *, (3959*acos(cos(radians(${lat}))*cos(radians(latitud_instalacion))*cos(radians(longitud_instalacion)-radians(${lng}))+sin(radians(${lat}))*sin(radians(latitud_instalacion)))) AS distance
        FROM t_instalaciones
        HAVING distance < ${miles}
        ORDER BY id_instalacion`).then((instalacion) => {
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
    }
};

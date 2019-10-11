"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("../config/sequelize");
const Sequelize = require('sequelize');
var path_module = require('path');
var fs = require('fs');
const Op = Sequelize.Op;
exports.miniBodegas_controller = {
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
    }
};

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("../config/sequelize");
const Sequelize = require('sequelize');
var path_module = require('path');
var fs = require('fs');
const Op = Sequelize.Op;
exports.clickTelefono_controller = {
    create: (req, res) => {
        let { idInstalacion, ipCliente, hora, fecha } = req.body;
        sequelize_1.clickTelefono.create({
            idInstalacion,
            ipCliente,
            hora,
            fecha
        }).then((galeria) => {
            if (galeria) {
                let response = {
                    message: 'Ok',
                    content: galeria
                };
                res.status(201).json(response);
                // console.log(filename)
                // console.log(nombreYExtension)
            }
            else {
                let response = {
                    message: 'Error',
                    content: 'Error al crear galeria'
                };
                res.status(400).json(response);
            }
        }).catch((error) => {
            res.send(error);
            console.log("Error => " + error);
        });
    }
};

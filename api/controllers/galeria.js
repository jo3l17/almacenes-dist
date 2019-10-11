"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("../config/sequelize");
const Sequelize = require('sequelize');
var path_module = require('path');
var fs = require('fs');
const Op = Sequelize.Op;
exports.galeria_controller = {
    create: (req, res) => {
        let imagen = req.file;
        if (imagen) {
            var filename = imagen.filename;
            let ruta = imagen.path;
            let nombreYExtension = ruta.split('\\')[1];
            let { idInstalacion } = req.params;
            // console.log(filename)
            // console.log(imagen)
            // console.log(idInstalacion)
            // console.log(nombreYExtension)
            sequelize_1.galeria.create({
                id_instalacion: idInstalacion,
                url: nombreYExtension
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
    },
};

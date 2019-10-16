"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("../config/sequelize");
const Sequelize = require('sequelize');
var path_module = require('path');
var fs = require('fs');
const Op = Sequelize.Op;
exports.clickTelefono_controller = {
    create: (req, res) => {
        function date() {
            let date = new Date();
            let day = date.getDate();
            let month = date.getMonth() + 1;
            let year = date.getFullYear();
            var h = date.getHours();
            var m = date.getMinutes();
            var s = date.getSeconds();
            m = checkTime(m);
            s = checkTime(s);
            var hora = `${h}:${m}:${s}`;
            if (month < 10) {
                var fecha = `${year}-0${month}-${day}`;
            }
            else {
                var fecha = `${year}-${month}-${day}`;
            }
            var horaYFecha = {
                hora,
                fecha
            };
            return horaYFecha;
        }
        function checkTime(i) {
            if (i < 10) {
                i = "0" + i;
            }
            return i;
        }
        let { idInstalacion, ipCliente } = req.body;
        sequelize_1.clickTelefono.create({
            idInstalacion,
            ipCliente,
            hora: date().hora,
            fecha: date().fecha
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

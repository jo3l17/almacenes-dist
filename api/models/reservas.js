"use strict";
/* jshint indent: 1 */
// tslint:disable
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.cotizacion_model = (sequelize) => {
    var cotizacion_model = sequelize.define('t_cotizacion', {
        idCotizacion: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            field: 'id_cotizacion'
        },
        nombreCotizacion: {
            type: sequelize_1.DataTypes.STRING(15),
            allowNull: false,
            field: 'nombre_cotizacion'
        },
        apellidoCotizacion: {
            type: sequelize_1.DataTypes.STRING(15),
            allowNull: false,
            field: 'apellido_cotizacion'
        },
        telefonoCotizacion: {
            type: sequelize_1.DataTypes.STRING(15),
            allowNull: false,
            field: 'telefono_cotizacion'
        },
        emailCotizacion: {
            type: sequelize_1.DataTypes.STRING(15),
            allowNull: false,
            field: 'email_cotizacion'
        }
    }, {
        timestamps: false,
        tableName: 't_cotizacion'
    });
    return cotizacion_model;
};

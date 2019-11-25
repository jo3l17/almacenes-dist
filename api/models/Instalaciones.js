"use strict";
/* jshint indent: 1 */
// tslint:disable
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.instalaciones_model = (sequelize) => {
    var instalaciones_model = sequelize.define('t_instalaciones', {
        idInstalacion: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            field: 'id'
        },
        nombreInstalacion: {
            type: sequelize_1.DataTypes.STRING(41),
            allowNull: true,
            field: 'nombre_instalacion'
        },
        regionInstalacion: {
            type: sequelize_1.DataTypes.STRING(255),
            allowNull: true,
            field: 'region_instalacion'
        },
        comunaInstalacion: {
            type: sequelize_1.DataTypes.STRING(255),
            allowNull: true,
            field: 'comuna_instalacion'
        },
        telefonoInstalacion: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: true,
            field: 'telefono_instalacion'
        },
        emailInstalacion: {
            type: sequelize_1.DataTypes.STRING(47),
            allowNull: true,
            field: 'email_instalacion'
        },
        direccionInstalacion: {
            type: sequelize_1.DataTypes.STRING(76),
            allowNull: true,
            field: 'direccion_instalacion'
        },
        descripcionInstalacion: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: true,
            field: 'descripcion_instalacion',
            defaultValue: 'no hay descripción'
        },
        latitudInstalacion: {
            type: sequelize_1.DataTypes.DECIMAL(10, 8),
            allowNull: true,
            field: 'latitud_instalacion'
        },
        longitudInstalacion: {
            type: sequelize_1.DataTypes.DECIMAL(10, 8),
            allowNull: true,
            field: 'longitud_instalacion'
        },
        usuId: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: true,
            field: 'usu_id'
        },
        ventanaReserva: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: true,
            field: 'ventana_reserva'
        },
        eliminar: {
            type: sequelize_1.DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
            field: 'eliminar'
        },
    }, {
        timestamps: false,
        tableName: 't_instalaciones'
    });
    return instalaciones_model;
};

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.visitas_instalaciones_model = (sequelize) => {
    var visitas_instalaciones_model = sequelize.define('t_visitas_instalaciones', {
        idVisitasInstalaciones: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            field: 'id'
        },
        idInstalacion: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: true,
            field: 'id_instalacion'
        },
        ip: {
            type: sequelize_1.DataTypes.STRING(16),
            allowNull: false,
            defaultValue: 0,
            field: 'ip'
        },
        fecha: {
            type: sequelize_1.DataTypes.DATEONLY,
            allowNull: false,
            field: 'fecha'
        },
        hora: {
            type: sequelize_1.DataTypes.TIME,
            allowNull: false,
            field: 'hora'
        },
    }, {
        timestamps: false,
        tableName: 't_visitas_instalaciones'
    });
    return visitas_instalaciones_model;
};

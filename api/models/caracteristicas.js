"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.caracteristicas_model = (sequelize) => {
    var caracteristicas_model = sequelize.define('t_caracteristicas', {
        idCaracteristica: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            field: 'id'
        },
        climaControlado: {
            type: sequelize_1.DataTypes.BOOLEAN,
            allowNull: true,
            field: 'clima_controlado'
        },
        acceso24Horas: {
            type: sequelize_1.DataTypes.BOOLEAN,
            allowNull: true,
            field: 'acceso24Horas'
        },
        piso1: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: true,
            field: 'piso1'
        }
    }, {
        timestamps: false,
        tableName: 't_caracteristicas'
    });
    return caracteristicas_model;
};

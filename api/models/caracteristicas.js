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
            field: 'id_caracteristica'
        },
        climaControlado: {
            type: sequelize_1.DataTypes.TINYINT,
            allowNull: true,
            field: 'clima_controlado'
        },
        interior: {
            type: sequelize_1.DataTypes.TINYINT,
            allowNull: true,
            field: 'interior'
        },
        piso: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: true,
            field: 'interior'
        }
    }, {
        timestamps: false,
        tableName: 't_caracteristicas'
    });
    return caracteristicas_model;
};

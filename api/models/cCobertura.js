"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.c_cobertura_model = (sequelize) => {
    var c_cobertura_model = sequelize.define('t_c_cobertura', {
        idCCobertura: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            field: 'id'
        },
        cSeguroRequerido: {
            type: sequelize_1.DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: 0,
            field: 'c_seguro_requerido'
        },
        cSeguroDisponible: {
            type: sequelize_1.DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: 0,
            field: 'c_seguro_disponible'
        },
        cSeguroPropietarios: {
            type: sequelize_1.DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: 0,
            field: 'c_seguro_propietarios'
        }
    }, {
        timestamps: false,
        tableName: 't_c_cobertura'
    });
    return c_cobertura_model;
};

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.c_seguridad_model = (sequelize) => {
    var c_seguridad_model = sequelize.define('t_c_seguridad', {
        idCSeguridad: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            field: 'id'
        },
        sVideocamaras: {
            type: sequelize_1.DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: 0,
            field: 's_videocamaras'
        },
        sCercadoiluminado: {
            type: sequelize_1.DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: 0,
            field: 's_cercado_iluminado'
        }
    }, {
        timestamps: false,
        tableName: 't_c_seguridad'
    });
    return c_seguridad_model;
};

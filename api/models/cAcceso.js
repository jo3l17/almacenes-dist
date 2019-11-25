"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.c_acceso_model = (sequelize) => {
    var c_acceso_model = sequelize.define('t_c_acceso', {
        idCAcceso: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            field: 'id'
        },
        aPuertaElectronica: {
            type: sequelize_1.DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: 0,
            field: 'a_puerta_electronica'
        },
        aMuelleCarga: {
            type: sequelize_1.DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: 0,
            field: 'a_muelle_carga'
        },
        aAscensor: {
            type: sequelize_1.DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: 0,
            field: 'a_ascensor'
        },
        aCarrosMano: {
            type: sequelize_1.DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: 0,
            field: 'a_carros_mano'
        },
        aQuiosco: {
            type: sequelize_1.DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: 0,
            field: 'a_quiosco'
        },
        aAcceso24: {
            type: sequelize_1.DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: 0,
            field: 'a_acceso_24'
        },
    }, {
        timestamps: false,
        tableName: 't_c_acceso'
    });
    return c_acceso_model;
};

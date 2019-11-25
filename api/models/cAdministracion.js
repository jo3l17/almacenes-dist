"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.c_administracion_model = (sequelize) => {
    var c_administracion_model = sequelize.define('t_c_administracion', {
        idCAdministracion: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            field: 'id'
        },
        adTarifaAdministrativa: {
            type: sequelize_1.DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: 0,
            field: 'ad_tarifa_administrativa'
        },
        adCorreo: {
            type: sequelize_1.DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: 0,
            field: 'ad_correo'
        }
    }, {
        timestamps: false,
        tableName: 't_c_administracion'
    });
    return c_administracion_model;
};

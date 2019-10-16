"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.clickTelefono_model = (sequelize) => {
    var clickTelefono_model = sequelize.define('t_clickTelefono', {
        idClickTelefono: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            field: 'id'
        },
        ipCliente: {
            type: sequelize_1.DataTypes.STRING(16),
            allowNull: false,
            defaultValue: 0,
            field: 'ip_cliente'
        },
        hora: {
            type: sequelize_1.DataTypes.TIME,
            allowNull: false,
            field: 'hora_clickTelefono'
        },
        fecha: {
            type: sequelize_1.DataTypes.DATEONLY,
            allowNull: false,
            field: 'fecha_clickTelefono'
        },
        idInstalacion: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: true,
            field: 'id_instalacion'
        }
    }, {
        timestamps: false,
        tableName: 't_clickTelefono'
    });
    return clickTelefono_model;
};

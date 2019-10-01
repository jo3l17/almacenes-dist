"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.instalacion_amenidad_model = (sequelize) => {
    var instalacion_amenidad_model = sequelize.define('t_instalacion_amenidad', {
        idInstalacionAmenidad: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            field: 'id_instalacion_amenidad'
        }
    }, {
        timestamps: false,
        tableName: 't_instalacion_amenidad'
    });
    return instalacion_amenidad_model;
};

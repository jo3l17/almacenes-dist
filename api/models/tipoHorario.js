"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.tipo_horario_model = (sequelize) => {
    var tipo_horario_model = sequelize.define('t_tipo_horario', {
        idTipoHorarios: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            field: 'id'
        },
        nombre: {
            type: sequelize_1.DataTypes.CHAR(255),
            allowNull: false,
            field: 'nombre'
        },
    }, {
        timestamps: false,
        tableName: 't_tipo_horario'
    });
    return tipo_horario_model;
};

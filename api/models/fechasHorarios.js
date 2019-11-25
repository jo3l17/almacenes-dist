"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.fechas_horario_model = (sequelize) => {
    var fechas_horario_model = sequelize.define('t_fechas_horarios', {
        idFechasHorarios: {
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
        tableName: 't_fechas_horarios'
    });
    return fechas_horario_model;
};

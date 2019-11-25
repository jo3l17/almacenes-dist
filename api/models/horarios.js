"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* jshint indent: 1 */
// tslint:disable
const sequelize_1 = require("sequelize");
exports.horarios_model = (sequelize) => {
    var horarios_model = sequelize.define('t_horarios', {
        idhorarios: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            field: 'id'
        },
        horaApertura: {
            type: sequelize_1.DataTypes.TIME,
            allowNull: false,
            field: 'hora_apertura'
        },
        horaCierre: {
            type: sequelize_1.DataTypes.TIME,
            allowNull: false,
            field: 'hora_cierre'
        },
    }, {
        timestamps: false,
        tableName: 't_horarios'
    });
    return horarios_model;
};

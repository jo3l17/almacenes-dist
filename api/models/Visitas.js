"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.visitas_model = (sequelize) => {
    var visitas_model = sequelize.define('t_visitas', {
        idvisitas: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            field: 'id_visitas'
        },
        nroVisitas: {
            type: sequelize_1.DataTypes.STRING(15),
            allowNull: false,
            field: 'nombre_visitas'
        }
    }, {
        timestamps: false,
        tableName: 't_visitas'
    });
    return visitas_model;
};

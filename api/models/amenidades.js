"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.amenidades_model = (sequelize) => {
    var amenidades_model = sequelize.define('t_amenidades', {
        idAmenidades: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            field: 'id_amenidad'
        },
        nombreAmenidad: {
            type: sequelize_1.DataTypes.STRING(41),
            allowNull: true,
            field: 'nombre_amenidad'
        }
    }, {
        timestamps: false,
        tableName: 't_amenidades'
    });
    return amenidades_model;
};

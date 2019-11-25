"use strict";
/* jshint indent: 1 */
// tslint:disable
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.galeria_model = (sequelize) => {
    var galeria_model = sequelize.define('t_galeria', {
        idGaleria: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            field: 'id'
        },
        url: {
            type: sequelize_1.DataTypes.STRING(1000),
            allowNull: false,
            field: 'url_galeria'
        },
        orden: {
            type: sequelize_1.DataTypes.TINYINT,
            allowNull: false,
            field: 'orden'
        },
        eliminar: {
            type: sequelize_1.DataTypes.BOOLEAN,
            allowNull: false,
            field: 'eliminar',
        }
    }, {
        timestamps: false,
        tableName: 't_galeria'
    });
    return galeria_model;
};

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
            field: 'id_galeria'
        },
        url: {
            type: sequelize_1.DataTypes.STRING(1000),
            allowNull: true,
            field: 'url_galeria'
        }
    }, {
        timestamps: false,
        tableName: 't_galeria'
    });
    return galeria_model;
};

"use strict";
/* jshint indent: 1 */
// tslint:disable
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.unidades_model = (sequelize) => {
    var unidades_model = sequelize.define('t_unidades', {
        idUnidad: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            field: 'id_unidad'
        },
        largo: {
            type: sequelize_1.DataTypes.FLOAT,
            allowNull: false,
            defaultValue: 15,
            field: 'largo_unidad'
        },
        ancho: {
            type: sequelize_1.DataTypes.FLOAT,
            allowNull: false,
            defaultValue: 10,
            field: 'ancho_unidad'
        },
        areaTotal: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 150,
            field: 'area_unidad'
        },
        TarifaMensual: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 38400,
            field: 'tarifa_mensual_unidad'
        },
        Visible: {
            type: sequelize_1.DataTypes.TINYINT,
            allowNull: false,
            defaultValue: 1,
            field: 'visible_unidad'
        }
    }, {
        timestamps: false,
        tableName: 't_unidades'
    });
    return unidades_model;
};

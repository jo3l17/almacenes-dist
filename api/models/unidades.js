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
            field: 'id'
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
            defaultValue: 0,
            field: 'visible_unidad'
        },
        Cantidad: {
            type: sequelize_1.DataTypes.TINYINT,
            allowNull: false,
            defaultValue: 1,
            field: 'cantidad'
        },
        eliminar: {
            type: sequelize_1.DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
            field: 'eliminar'
        },
        idEmpresa: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            field: 'id_empresa'
        },
        VentanaReserva: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 15,
            field: 'ventana_reserva'
        },
        oferta: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: true,
            field: 'oferta'
        }
    }, {
        timestamps: false,
        tableName: 't_unidades'
    });
    return unidades_model;
};

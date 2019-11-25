"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.c_facturacion_model = (sequelize) => {
    var c_facturacion_model = sequelize.define('t_c_facturacion', {
        idCFacturacion: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            field: 'id'
        },
        fCorreoElectronico: {
            type: sequelize_1.DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: 0,
            field: 'f_correo_electronico'
        },
        fAlquiler1CadaMes: {
            type: sequelize_1.DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: 0,
            field: 'f_alquiler_1'
        },
        fPagoAutomatico: {
            type: sequelize_1.DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: 0,
            field: 'f_pago_automatico'
        },
        fDepositoSeguridad: {
            type: sequelize_1.DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: 0,
            field: 'f_deposito_seguridad'
        },
        fEfectivoAceptado: {
            type: sequelize_1.DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: 0,
            field: 'f_efectivo'
        },
        fChequesAceptado: {
            type: sequelize_1.DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: 0,
            field: 'f_cheques'
        },
        fTarjetasAceptado: {
            type: sequelize_1.DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: 0,
            field: 'f_tarjetas'
        }
    }, {
        timestamps: false,
        tableName: 't_c_facturacion'
    });
    return c_facturacion_model;
};

"use strict";
/* jshint indent: 1 */
// tslint:disable
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.reserva_model = (sequelize) => {
    var reserva_model = sequelize.define('t_reserva', {
        idReserva: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            field: 'id_reserva'
        },
        nombreReserva: {
            type: sequelize_1.DataTypes.STRING(15),
            allowNull: false,
            field: 'nombre_reserva'
        },
        apellidoReserva: {
            type: sequelize_1.DataTypes.STRING(15),
            allowNull: false,
            field: 'apellido_reserva'
        },
        telefonoReserva: {
            type: sequelize_1.DataTypes.STRING(15),
            allowNull: false,
            field: 'telefono_reserva'
        },
        emailReserva: {
            type: sequelize_1.DataTypes.STRING(15),
            allowNull: false,
            field: 'email_reserva'
        },
        estadoReserva: {
            type: sequelize_1.DataTypes.TINYINT,
            allowNull: false,
            defaultValue: 0,
            field: 'estado_reserva'
        }
    }, {
        timestamps: false,
        tableName: 't_reserva'
    });
    return reserva_model;
};

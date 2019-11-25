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
            field: 'id'
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
            type: sequelize_1.DataTypes.STRING(50),
            allowNull: false,
            field: 'email_reserva'
        },
        estadoReserva: {
            type: sequelize_1.DataTypes.TINYINT,
            allowNull: false,
            defaultValue: 0,
            field: 'estado_reserva'
        },
        eliminar: {
            type: sequelize_1.DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
            field: 'eliminar'
        },
        fechaRegistro: {
            type: sequelize_1.DataTypes.DATEONLY,
            allowNull: false,
            field: 'fecha_registro'
        },
        fechaMudanza: {
            type: sequelize_1.DataTypes.DATEONLY,
            allowNull: true,
            field: 'fecha_mudanza'
        },
        codigoUrl: {
            type: sequelize_1.DataTypes.CHAR(10),
            allowNull: true,
            field: 'codigo_url'
        },
        codigoWeb: {
            type: sequelize_1.DataTypes.CHAR(10),
            allowNull: true,
            field: 'codigo_web'
        },
        idUnidad: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            field: 'id_unidad'
        },
        idEmpresa: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            field: 'id_empresa'
        },
        idInstalacion: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            field: 'id_instalacion'
        },
        precio: {
            type: sequelize_1.DataTypes.DECIMAL(10, 2),
            allowNull: false,
            field: 'precio'
        },
        sistema_cancelado: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: true,
            field: 'sistema_cancelado'
        }
    }, {
        timestamps: false,
        tableName: 't_reserva'
    });
    return reserva_model;
};

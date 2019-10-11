"use strict";
/* jshint indent: 1 */
// tslint:disable
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.instalaciones_model = (sequelize) => {
    var instalaciones_model = sequelize.define('t_instalaciones', {
        idInstalacion: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            field: 'id_instalacion'
        },
        nombreInstalacion: {
            type: sequelize_1.DataTypes.STRING(41),
            allowNull: true,
            field: 'nombre_instalacion'
        },
        nroInstalacion: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: true,
            field: 'nro_instalacion'
        },
        paginaWeb: {
            type: sequelize_1.DataTypes.STRING(73),
            allowNull: true,
            field: 'pagina_WEB'
        },
        regionInstalacion: {
            type: sequelize_1.DataTypes.STRING(10),
            allowNull: true,
            field: 'region_instalacion'
        },
        comunaInstalacion: {
            type: sequelize_1.DataTypes.STRING(19),
            allowNull: true,
            field: 'comuna_instalacion'
        },
        telefonoInstalacion: {
            type: sequelize_1.DataTypes.STRING(41),
            allowNull: true,
            field: 'telefono_instalacion'
        },
        emailInstalacion: {
            type: sequelize_1.DataTypes.STRING(47),
            allowNull: true,
            field: 'email_instalacion'
        },
        direccionInstalacion: {
            type: sequelize_1.DataTypes.STRING(76),
            allowNull: true,
            field: 'direccion_instalacion'
        },
        descripcionInstalacion: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: true,
            field: 'descripcion_instalacion',
            defaultValue: 'no hay descripción'
        },
        latitudInstalacion: {
            type: sequelize_1.DataTypes.DECIMAL(10, 8),
            allowNull: true,
            field: 'latitud_instalacion'
        },
        longitudInstalacion: {
            type: sequelize_1.DataTypes.DECIMAL(10, 8),
            allowNull: true,
            field: 'longitud_instalacion'
        },
        visitas: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
            field: 'visitas_instalacion'
        }
    }, {
        timestamps: false,
        tableName: 't_instalaciones'
    });
    return instalaciones_model;
};

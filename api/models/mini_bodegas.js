"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.miniBodegas_model = (sequelize) => {
    var miniBodegas_model = sequelize.define('t_miniBodegas', {
        idOperador: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            field: 'id'
        },
        nombreOperador: {
            type: sequelize_1.DataTypes.STRING(41),
            allowNull: true,
            field: 'nombre'
        },
        paginaWeb: {
            type: sequelize_1.DataTypes.STRING(53),
            allowNull: true,
            field: 'pagina_web'
        },
        region: {
            type: sequelize_1.DataTypes.STRING(255),
            allowNull: true,
            field: 'region'
        },
        comuna: {
            type: sequelize_1.DataTypes.STRING(106),
            allowNull: true,
            field: 'comuna'
        },
        telefono: {
            type: sequelize_1.DataTypes.STRING(81),
            allowNull: true,
            field: 'telefono'
        },
        email: {
            type: sequelize_1.DataTypes.STRING(39),
            allowNull: true,
            field: 'email'
        },
        direccion: {
            type: sequelize_1.DataTypes.STRING(91),
            allowNull: true,
            field: 'direccion'
        },
        usu_id: {
            type: sequelize_1.DataTypes.INTEGER,
            defaultValue: 1
        },
        eliminar: {
            type: sequelize_1.DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
            field: 'eliminar'
        },
    }, {
        timestamps: false,
        tableName: 't_miniBodegas'
    });
    return miniBodegas_model;
};

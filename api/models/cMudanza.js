"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.c_mudanza_model = (sequelize) => {
    var c_mudanza_model = sequelize.define('t_c_mudanza', {
        idCMudanza: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            field: 'id_c_mudanza'
        },
        mSuministros: {
            type: sequelize_1.DataTypes.TINYINT,
            allowNull: false,
            defaultValue: 0,
            field: 'm_suministros'
        },
    }, {
        timestamps: false,
        tableName: 't_c_mudanza'
    });
    return c_mudanza_model;
};

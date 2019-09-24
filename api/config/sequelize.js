"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Instalaciones_1 = require("../models/Instalaciones");
const mini_bodegas_1 = require("../models/mini_bodegas");
const Sequelize = require('sequelize');
exports.sequelize = new Sequelize('R63uiu6aze', 'R63uiu6aze', 'ZTWDTRy5QP', {
    host: 'remotemysql.com',
    dialect: 'mysql',
    timezone: '-05:00',
    logging: console.log
});
exports.miniBodegas = mini_bodegas_1.miniBodegas_model(exports.sequelize);
exports.instalaciones = Instalaciones_1.instalaciones_model(exports.sequelize);
exports.instalaciones.belongsTo(exports.miniBodegas, { foreignKey: 'idOperador' });
exports.miniBodegas.hasMany(exports.instalaciones, { foreignKey: 'idOperador' });

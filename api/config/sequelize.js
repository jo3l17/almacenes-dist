"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Instalaciones_1 = require("../models/Instalaciones");
const mini_bodegas_1 = require("../models/mini_bodegas");
const unidades_1 = require("../models/unidades");
const usuario_1 = require("../models/usuario");
const amenidades_1 = require("../models/amenidades");
const instAmn_1 = require("../models/instAmn");
const caracteristicas_1 = require("../models/caracteristicas");
const Sequelize = require('sequelize');
exports.sequelize = new Sequelize('R63uiu6aze', 'R63uiu6aze', 'ZTWDTRy5QP', {
    host: 'remotemysql.com',
    dialect: 'mysql',
    timezone: '-05:00',
    logging: console.log
});
exports.miniBodegas = mini_bodegas_1.miniBodegas_model(exports.sequelize);
exports.instalaciones = Instalaciones_1.instalaciones_model(exports.sequelize);
exports.unidades = unidades_1.unidades_model(exports.sequelize);
exports.Usuario = usuario_1.usuario_model(exports.sequelize);
exports.amenidades = amenidades_1.amenidades_model(exports.sequelize);
exports.instAmn = instAmn_1.instalacion_amenidad_model(exports.sequelize);
exports.caracteristicas = caracteristicas_1.caracteristicas_model(exports.sequelize);
exports.instalaciones.belongsTo(exports.miniBodegas, { foreignKey: 'id_operador' });
exports.miniBodegas.hasMany(exports.instalaciones, { foreignKey: 'id_operador' });
exports.unidades.belongsTo(exports.instalaciones, { foreignKey: 'id_instalacion' });
exports.instalaciones.hasMany(exports.unidades, { foreignKey: 'id_instalacion' });
exports.miniBodegas.belongsTo(exports.Usuario, { foreignKey: 'usu_id' });
exports.Usuario.hasMany(exports.miniBodegas, { foreignKey: 'usu_id' });
exports.instAmn.belongsTo(exports.amenidades, { foreignKey: 'id_amenidad' });
exports.amenidades.hasMany(exports.instAmn, { foreignKey: 'id_amenidad' });
exports.instAmn.belongsTo(exports.instalaciones, { foreignKey: 'id_instalacion' });
exports.instalaciones.hasMany(exports.instAmn, { foreignKey: 'id_instalacion' });
exports.caracteristicas.belongsTo(exports.unidades, { foreignKey: 'id_unidad' });
exports.unidades.hasOne(exports.caracteristicas, { foreignKey: 'id_unidad' });

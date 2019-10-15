"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Instalaciones_1 = require("../models/Instalaciones");
const mini_bodegas_1 = require("../models/mini_bodegas");
const unidades_1 = require("../models/unidades");
const usuario_1 = require("../models/usuario");
const amenidades_1 = require("../models/amenidades");
const instAmn_1 = require("../models/instAmn");
const caracteristicas_1 = require("../models/caracteristicas");
const galeria_1 = require("../models/galeria");
const cAcceso_1 = require("../models/cAcceso");
const cFacturacion_1 = require("../models/cFacturacion");
const cMudanza_1 = require("../models/cMudanza");
const cAdministracion_1 = require("../models/cAdministracion");
const cCobertura_1 = require("../models/cCobertura");
const cSeguridad_1 = require("../models/cSeguridad");
const reservas_1 = require("../models/reservas");
const regisroClickTelefono_1 = require("../models/regisroClickTelefono");
const Sequelize = require('sequelize');
exports.sequelize = new Sequelize('R63uiu6aze', 'R63uiu6aze', 'ZTWDTRy5QP', {
    // export const sequelize = new Sequelize('hardmachine_almacenes', 'hardmachine_admin', 'kassandra@2015', {
    // host: '142.44.199.21',
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
exports.galeria = galeria_1.galeria_model(exports.sequelize);
exports.cAcceso = cAcceso_1.c_acceso_model(exports.sequelize);
exports.cFacturacion = cFacturacion_1.c_facturacion_model(exports.sequelize);
exports.cMudanza = cMudanza_1.c_mudanza_model(exports.sequelize);
exports.cAdministracion = cAdministracion_1.c_administracion_model(exports.sequelize);
exports.cCobertura = cCobertura_1.c_cobertura_model(exports.sequelize);
exports.cSeguridad = cSeguridad_1.c_seguridad_model(exports.sequelize);
exports.reserva = reservas_1.reserva_model(exports.sequelize);
exports.clickTelefono = regisroClickTelefono_1.clickTelefono_model(exports.sequelize);
exports.instalaciones.belongsTo(exports.miniBodegas, { foreignKey: 'id_operador' });
exports.miniBodegas.hasMany(exports.instalaciones, { foreignKey: 'id_operador' });
exports.unidades.belongsTo(exports.instalaciones, { foreignKey: 'id_instalacion' });
exports.instalaciones.hasMany(exports.unidades, { foreignKey: 'id_instalacion' });
exports.miniBodegas.belongsTo(exports.Usuario, { foreignKey: 'usu_id' });
exports.Usuario.hasMany(exports.miniBodegas, { foreignKey: 'usu_id' });
exports.instalaciones.belongsTo(exports.Usuario, { foreignKey: 'usu_id' });
exports.Usuario.hasOne(exports.instalaciones, { foreignKey: 'usu_id' });
exports.instAmn.belongsTo(exports.amenidades, { foreignKey: 'id_amenidad' });
exports.amenidades.hasMany(exports.instAmn, { foreignKey: 'id_amenidad' });
exports.instAmn.belongsTo(exports.instalaciones, { foreignKey: 'id_instalacion' });
exports.instalaciones.hasMany(exports.instAmn, { foreignKey: 'id_instalacion' });
exports.caracteristicas.belongsTo(exports.unidades, { foreignKey: 'id_unidad' });
exports.unidades.hasOne(exports.caracteristicas, { foreignKey: 'id_unidad' });
exports.unidades.hasMany(exports.reserva, { foreignKey: 'id_unidad' });
exports.reserva.belongsTo(exports.unidades, { foreignKey: 'id_unidad' });
exports.galeria.belongsTo(exports.instalaciones, { foreignKey: 'id_instalacion' });
exports.instalaciones.hasMany(exports.galeria, { foreignKey: 'id_instalacion' });
exports.instalaciones.hasOne(exports.cAcceso, { foreignKey: 'id_instalacion' });
exports.instalaciones.hasOne(exports.cFacturacion, { foreignKey: 'id_instalacion' });
exports.instalaciones.hasOne(exports.cMudanza, { foreignKey: 'id_instalacion' });
exports.instalaciones.hasOne(exports.cAdministracion, { foreignKey: 'id_instalacion' });
exports.instalaciones.hasOne(exports.cCobertura, { foreignKey: 'id_instalacion' });
exports.instalaciones.hasOne(exports.cSeguridad, { foreignKey: 'id_instalacion' });
exports.cAcceso.belongsTo(exports.instalaciones, { foreignKey: 'id_instalacion' });
exports.cFacturacion.belongsTo(exports.instalaciones, { foreignKey: 'id_instalacion' });
exports.cMudanza.belongsTo(exports.instalaciones, { foreignKey: 'id_instalacion' });
exports.cAdministracion.belongsTo(exports.instalaciones, { foreignKey: 'id_instalacion' });
exports.cCobertura.belongsTo(exports.instalaciones, { foreignKey: 'id_instalacion' });
exports.cSeguridad.belongsTo(exports.instalaciones, { foreignKey: 'id_instalacion' });
exports.clickTelefono.belongsTo(exports.instalaciones, { foreignKey: 'id_instalacion' });
exports.instalaciones.hasMany(exports.clickTelefono, { foreignKey: 'id_instalacion' });

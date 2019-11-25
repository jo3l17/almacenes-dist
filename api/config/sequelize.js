"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Instalaciones_1 = require("../models/Instalaciones");
const mini_bodegas_1 = require("../models/mini_bodegas");
const unidades_1 = require("../models/unidades");
const usuario_1 = require("../models/usuario");
const caracteristicas_1 = require("../models/caracteristicas");
const galeria_1 = require("../models/galeria");
const reservas_1 = require("../models/reservas");
const regisroClickTelefono_1 = require("../models/regisroClickTelefono");
const visitasInstalaciones_1 = require("../models/visitasInstalaciones");
const horarios_1 = require("../models/horarios");
const tipoHorario_1 = require("../models/tipoHorario");
const fechasHorarios_1 = require("../models/fechasHorarios");
const Sequelize = require('sequelize');
// export const sequelize = new Sequelize('R63uiu6aze', 'R63uiu6aze', 'ZTWDTRy5QP', {
// export const sequelize = new Sequelize('bwgybU3cwU', 'bwgybU3cwU', 'Zc4fb3RDuT', {
exports.sequelize = new Sequelize('mercadob_almacenes', 'mercadob_administrador', 'amdigital_2019', {
    // export const sequelize = new Sequelize('almacenes', 'administrador', 'kassandra@2015', {
    // host: '68.66.224.55',//mercadobodegas.net
    host: '172.96.186.242',
    // host: 'remotemysql.com',
    // host: '192.168.1.6',
    dialect: 'mysql',
    timezone: '-05:00',
    logging: console.log
});
exports.miniBodegas = mini_bodegas_1.miniBodegas_model(exports.sequelize);
exports.instalaciones = Instalaciones_1.instalaciones_model(exports.sequelize);
exports.unidades = unidades_1.unidades_model(exports.sequelize);
exports.Usuario = usuario_1.usuario_model(exports.sequelize);
// export const amenidades = amenidades_model(sequelize)
// export const instAmn = instalacion_amenidad_model(sequelize)
exports.caracteristicas = caracteristicas_1.caracteristicas_model(exports.sequelize);
exports.galeria = galeria_1.galeria_model(exports.sequelize);
exports.reserva = reservas_1.reserva_model(exports.sequelize);
exports.clickTelefono = regisroClickTelefono_1.clickTelefono_model(exports.sequelize);
exports.visitasInstalaciones = visitasInstalaciones_1.visitas_instalaciones_model(exports.sequelize);
exports.horarios = horarios_1.horarios_model(exports.sequelize);
exports.TipoHorario = tipoHorario_1.tipo_horario_model(exports.sequelize);
exports.FechasHorario = fechasHorarios_1.fechas_horario_model(exports.sequelize);
exports.instalaciones.belongsTo(exports.miniBodegas, { foreignKey: 'id_operador' });
exports.miniBodegas.hasMany(exports.instalaciones, { foreignKey: 'id_operador' });
exports.unidades.belongsTo(exports.instalaciones, { foreignKey: 'id_instalacion' });
exports.instalaciones.hasMany(exports.unidades, { foreignKey: 'id_instalacion' });
exports.miniBodegas.belongsTo(exports.Usuario, { foreignKey: 'usu_id' });
exports.Usuario.hasMany(exports.miniBodegas, { foreignKey: 'usu_id' });
exports.instalaciones.belongsTo(exports.Usuario, { foreignKey: 'usu_id' });
exports.Usuario.hasOne(exports.instalaciones, { foreignKey: 'usu_id' });
// instAmn.belongsTo(amenidades, { foreignKey: 'id_amenidad' });
// amenidades.hasMany(instAmn, { foreignKey: 'id_amenidad' })
// instAmn.belongsTo(instalaciones, { foreignKey: 'id_instalacion' });
// instalaciones.hasMany(instAmn, { foreignKey: 'id_instalacion' })
exports.caracteristicas.belongsTo(exports.unidades, { foreignKey: 'id_unidad' });
exports.unidades.hasOne(exports.caracteristicas, { foreignKey: 'id_unidad' });
exports.horarios.belongsTo(exports.instalaciones, { foreignKey: 'id_instalacion' });
exports.instalaciones.hasMany(exports.horarios, { foreignKey: 'id_instalacion' });
exports.horarios.belongsTo(exports.TipoHorario, { foreignKey: 'id_tipo' });
exports.TipoHorario.hasMany(exports.horarios, { foreignKey: 'id_tipo' });
exports.horarios.belongsTo(exports.FechasHorario, { foreignKey: 'id_fechas' });
exports.FechasHorario.hasMany(exports.horarios, { foreignKey: 'id_fechas' });
exports.unidades.hasMany(exports.reserva, { foreignKey: 'id_unidad' });
exports.reserva.belongsTo(exports.unidades, { foreignKey: 'id_unidad' });
exports.galeria.belongsTo(exports.instalaciones, { foreignKey: 'id_instalacion' });
exports.instalaciones.hasMany(exports.galeria, { foreignKey: 'id_instalacion' });
exports.clickTelefono.belongsTo(exports.instalaciones, { foreignKey: 'id_instalacion' });
exports.instalaciones.hasMany(exports.clickTelefono, { foreignKey: 'id_instalacion' });
exports.visitasInstalaciones.belongsTo(exports.instalaciones, { foreignKey: 'id_instalacion' });
exports.instalaciones.hasMany(exports.visitasInstalaciones, { foreignKey: 'id_instalacion' });
exports.visitasInstalaciones.belongsTo(exports.miniBodegas, { foreignKey: 'id_empresa' });
exports.miniBodegas.hasMany(exports.visitasInstalaciones, { foreignKey: 'id_empresa' });

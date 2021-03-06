"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const instalaciones_1 = require("../controllers/instalaciones");
const express_1 = require("express");
exports.instalaciones_router = express_1.Router();
exports.instalaciones_router.get('/instalaciones/traertodos', instalaciones_1.instalaciones_controller.getAll);
exports.instalaciones_router.post('/instalaciones/actualizar', instalaciones_1.instalaciones_controller.UpdateById);
exports.instalaciones_router.get('/instalaciones/getFirst', instalaciones_1.instalaciones_controller.getThefirst);
exports.instalaciones_router.get('/instalaciones/nombreId/:id_operador', instalaciones_1.instalaciones_controller.getAllNameandID);
exports.instalaciones_router.get('/instalaciones/:id', instalaciones_1.instalaciones_controller.getById);
exports.instalaciones_router.get('/instalaciones/getOne/:id', instalaciones_1.instalaciones_controller.getOne);
exports.instalaciones_router.get('/instalaciones/getbyUsuId/:usuId', instalaciones_1.instalaciones_controller.getAllByUsuId);
exports.instalaciones_router.get('/instalaciones', instalaciones_1.instalaciones_controller.getByBusqueda);
exports.instalaciones_router.get('/instalaciones/distance/:lat/:lng/:distance', instalaciones_1.instalaciones_controller.getByLatLng1);
exports.instalaciones_router.get('/instalaciones/:lat/:lng/:miles', instalaciones_1.instalaciones_controller.getByLatLng);
exports.instalaciones_router.get('/instalaciones/bounds/:maxLng/:minLng/:maxLat/:minLat', instalaciones_1.instalaciones_controller.getByBounds);
exports.instalaciones_router.get('/instalaciones/medidas/:maxLng/:minLng/:maxLat/:minLat/:minMedida/:maxMedida', instalaciones_1.instalaciones_controller.PorMedida);
exports.instalaciones_router.get('/instalaciones/amenidad/:maxLng/:minLng/:maxLat/:minLat/:clima/:acceso/:piso', instalaciones_1.instalaciones_controller.porAmenidad);
exports.instalaciones_router.get('/instalaciones/amenidadymedida/:maxLng/:minLng/:maxLat/:minLat/:clima/:acceso/:piso/:minMedida/:maxMedida', instalaciones_1.instalaciones_controller.porAmenidadYMedida);

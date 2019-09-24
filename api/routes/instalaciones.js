"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const instalaciones_1 = require("../controllers/instalaciones");
const express_1 = require("express");
exports.instalaciones_router = express_1.Router();
exports.instalaciones_router.get('/instalaciones/traertodos', instalaciones_1.instalaciones_controller.getAll);
exports.instalaciones_router.get('/instalaciones/:id', instalaciones_1.instalaciones_controller.getById);
exports.instalaciones_router.get('/instalaciones', instalaciones_1.instalaciones_controller.getByBusqueda);
exports.instalaciones_router.get('/instalaciones/:lat/:lng/:miles', instalaciones_1.instalaciones_controller.getByLatLng);

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const unidades_1 = require("../controllers/unidades");
const express_1 = require("express");
exports.unidades_router = express_1.Router();
exports.unidades_router.get('/unidades/getOne/:idUnidad', unidades_1.unidades_controller.getOne);
exports.unidades_router.post('/unidades/actualizar', unidades_1.unidades_controller.updateById);
exports.unidades_router.post('/unidades/eliminarVisible', unidades_1.unidades_controller.deleteAndVisibleById);

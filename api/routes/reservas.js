"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const reservas_1 = require("../controllers/reservas");
const express_1 = require("express");
exports.reservas_router = express_1.Router();
exports.reservas_router.get('/reservas/getOne/:idReserva', reservas_1.reservas_controller.getById);
exports.reservas_router.post('/reservas/actualizar', reservas_1.reservas_controller.updateById);

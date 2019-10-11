"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const miniBodegas_1 = require("../controllers/miniBodegas");
const express_1 = require("express");
exports.miniBodegas_router = express_1.Router();
exports.miniBodegas_router.get('/miniBodegas/:id', miniBodegas_1.miniBodegas_controller.getMinibodegabyId);
exports.miniBodegas_router.get('/miniBodegas/getOne/:id', miniBodegas_1.miniBodegas_controller.getOne);

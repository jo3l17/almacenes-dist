"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const usuario_1 = require("../controllers/usuario");
const express_1 = require("express");
const Multer = require('multer');
const multer = Multer({
    storage: Multer.memoryStorage(),
    limits: {
        fileSize: 5 * 1024 * 1024 // no larger than 5mb, you can change as needed.
    }
});
exports.usuario_router = express_1.Router();
exports.usuario_router.post('/usuario/crear', multer.single('imagen'), usuario_1.usuario_controller.create);
exports.usuario_router.post('/usuario/login', usuario_1.usuario_controller.login);
exports.usuario_router.get('/usuario/traertodos', usuario_1.usuario_controller.getAll);
exports.usuario_router.get('/usuario/traerporcorreo/:correo', usuario_1.usuario_controller.getByEmail);
exports.usuario_router.get('/usuario/traerporid/:id', usuario_1.usuario_controller.getById);
exports.usuario_router.put('/usuario/actualizar/:id', multer.single('imagen'), usuario_1.usuario_controller.upDateById);

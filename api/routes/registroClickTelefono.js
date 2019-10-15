"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const registroClickTelefono_1 = require("../controllers/registroClickTelefono");
const express_1 = require("express");
exports.clickTelefono_router = express_1.Router();
exports.clickTelefono_router.post('/registroTelefono/crear', registroClickTelefono_1.clickTelefono_controller.create);

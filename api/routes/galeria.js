"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const galeria_1 = require("../controllers/galeria");
const express_1 = require("express");
const Multer = require('multer');
let storage = Multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './galeria');
    },
    filename: function (req, file, cb) {
        let extArray = file.mimetype.split("/");
        let extension = extArray[extArray.length - 1];
        cb(null, file.fieldname + '-' + Date.now() + '.' + extension);
    }
});
const multer = Multer({ storage: storage });
exports.galeria_router = express_1.Router();
exports.galeria_router.post('/galeria/crear/:idInstalacion', multer.single('imagen'), galeria_1.galeria_controller.create);
// galeria_router.get('/galeria/:id', galeria_controller.create);

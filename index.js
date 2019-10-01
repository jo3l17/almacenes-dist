"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("./api/config/sequelize");
const instalaciones_1 = require("./api/routes/instalaciones");
const usuario_1 = require("./api/routes/usuario");
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const puerto = process.env.PORT || 3700;
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Credentials", 'true');
    res.header('Access-Control-Allow-Headers', 'Origin,X-Requested-With,Content-Type,Accept,Content-type,Authorization,application/json');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Allow', 'GET,PUT,POST,DELETE,OPTIONS');
    next();
});
require('./public/google-place-details')(app, {});
app.listen(puerto, () => {
    console.log(`servidor coriendo en ${puerto}`);
    sequelize_1.sequelize.sync({ force: false }).then(() => {
        console.log('base de datos creada');
    }).catch((error) => {
        console.log(error);
        console.log('error al crear base de datos');
    });
});
app.use('/api', usuario_1.usuario_router);
app.use('/api', instalaciones_1.instalaciones_router);
// app.use('/',(req:any,res:any)=>{res.send('it works :v')})

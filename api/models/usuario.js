"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
exports.usuario_model = (sequelize) => {
    var usuario_model = sequelize.define('t_usuario', {
        usu_id: {
            type: sequelize_1.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        usu_email: {
            type: sequelize_1.DataTypes.STRING(50),
            allowNull: false,
            unique: true,
        },
        usu_nom: {
            type: sequelize_1.DataTypes.STRING(45),
            allowNull: false,
        },
        usu_ape: {
            type: sequelize_1.DataTypes.STRING(60),
            allowNull: false,
        },
        usu_tel: {
            type: sequelize_1.DataTypes.STRING(15),
            allowNull: true,
        },
        usu_hash: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: false,
        },
        usu_salt: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: false,
        },
        usu_tipo: {
            type: sequelize_1.DataTypes.STRING(1),
            allowNull: false,
        },
        usu_img: {
            type: sequelize_1.DataTypes.STRING(1000),
            allowNull: true,
        }
    }, {
        timestamps: false,
        tableName: 't_usuario'
    });
    usuario_model.prototype.setSaltAndHash = function (password) {
        this.usu_salt = crypto.randomBytes(16).toString('hex');
        this.usu_hash = crypto.pbkdf2Sync(password, this.usu_salt, 1000, 64, 'sha512').toString('hex');
    };
    usuario_model.prototype.validPassword = function (password) {
        let hash_temporal = crypto.pbkdf2Sync(password, this.usu_salt, 1000, 64, 'sha512').toString('hex');
        if (hash_temporal === this.usu_hash) {
            return true;
        }
        else {
            return false;
        }
    };
    usuario_model.prototype.generateJWT = function () {
        let payload = {
            usu_id: this.usu_email,
            usu_nom: `${this.usu_nom} ${this.usu_ape}`,
            usu_tipo: this.usu_tipo
        };
        var token = jwt.sign(payload, 'huariques', { expiresIn: '30min' }, { algorithm: 'RS256' });
        return token;
    };
    return usuario_model;
};

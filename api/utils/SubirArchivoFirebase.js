"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Imports the Google Cloud client library.
const { Storage } = require('@google-cloud/storage');
// Instantiates a client. Explicitly use service account credentials by
// specifying the private key file. All clients in google-cloud-node have this
// helper, see https://github.com/GoogleCloudPlatform/google-cloud-node/blob/master/docs/authentication.md
//Variable para guardar el id del proyecto y el filename que eso se descarga en https://cloud.google.com/docs/authentication/production#auth-cloud-implicit-nodejs
const api = {
    projectId: 'maquinariasproyectoamdigital',
    keyFilename: './maquinariasproyectoamdigital-firebase-adminsdk-m0a6q-c200a9be05.json'
};
const storage = new Storage(api);
//se crea la variable bucket que usa como referencia el link del storage
const bucket = storage.bucket('maquinariasproyectoamdigital.appspot.com');
exports.subirArchivo = (imagen, carpeta) => {
    return new Promise((resolve, reject) => {
        if (!imagen) {
            reject('No hay imagen');
        }
        let newFileName = `${carpeta}/${imagen.originalname}_${Date.now()}`;
        let fileUpload = bucket.file(newFileName);
        const blobStream = fileUpload.createWriteStream({
            metadata: {
                contentType: imagen.mimetype
            }
        });
        blobStream.on('error', (error) => {
            reject('Something is wrong! Unable to upload at the moment.' + error);
        });
        blobStream.on('finish', () => {
            fileUpload.getSignedUrl({
                action: 'read',
                expires: '12-12-2491'
            }).then((link) => {
                resolve(link);
            });
        });
        blobStream.end(imagen.buffer);
    });
};

const { Router } = require("express");
const {createO, captureO, cancelO} = require('../controllers/pagos.controller.js');

const ruta = Router();

ruta.post('/create-order', createO);
ruta.get('/capture-order', captureO);
ruta.get('/cancel-order', cancelO);


module.exports = ruta;
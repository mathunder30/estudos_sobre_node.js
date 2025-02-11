const express = require('express');
const route = express.Router();
const homeControllers = require('./src/controllers/homeControllers');

route.get('/', homeControllers.paginaInicial);
route.get('/testes', homeControllers.Testes);
route.post('/', homeControllers.Entrega);

module.exports = route;
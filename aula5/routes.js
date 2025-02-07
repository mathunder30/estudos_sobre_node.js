const express = require('express');
const route = express.Router();
const homeControllers = require('./controllers/homeControllers');

route.get('/', homeControllers.paginaInicial);

route.post('/', homeControllers.Entrega);

module.exports = route;
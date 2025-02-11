const express = require('express');
const route = express.Router();
const homeControllers = require('./src/controllers/homeControllers');

function meuMeddleware(req, res, next){
    console.log('esperando a resposta');
    next();

}

route.get('/', meuMeddleware, homeControllers.paginaInicial);
route.get('/testes', homeControllers.Testes);
route.post('/', homeControllers.Entrega);

module.exports = route;
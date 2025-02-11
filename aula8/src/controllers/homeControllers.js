exports.paginaInicial = (req, res, next) =>{
    res.render('index');
    next();
}

exports.Testes = (req, res, next) =>{
    console.log(req.params);
    console.log(req.query);
    res.send(req.params.idUsuarios);
}

exports.Entrega = (req, res, next) => {
    console.log(req.body)
    res.send(`O que voce digitou foi: ${req.body}`);
}
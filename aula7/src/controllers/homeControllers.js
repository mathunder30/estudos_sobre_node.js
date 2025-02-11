exports.paginaInicial = (req, res) =>{
    res.render('index')
}

exports.Testes = (req, res) =>{
    console.log(req.params);
    console.log(req.query);
    res.send(req.params.idUsuarios);
}

exports.Entrega = (req, res) => {
    console.log(req.body)
    res.send(`O que voce digitou foi: ${req.body}`);
}
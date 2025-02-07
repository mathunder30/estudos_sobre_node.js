exports.paginaInicial = (req, res) =>{
    res.send(`<form action="/" method = "POST"> Nome do individuo: <input type = "text" name = "nome"> <button>Enviar</button></form> `);

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
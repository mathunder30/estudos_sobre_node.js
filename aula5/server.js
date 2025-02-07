const express = require('express');
const app = express();

app.use(
    express.urlencoded(
        {
            extended: true
        }
    )
)

// crud -> create, read, uptade, delete
//         post, get, put, delete

app.get('/', (req, res) =>{
    res.send(`<form action="/" method = "POST"> Nome do individuo: <input type = "text" name = "nome"> <button>Enviar</button></form> `);

});
app.get('/testes/:idUsuarios?/:parametro?', (req, res) =>{
    console.log(req.params);
    console.log(req.query);
    res.send(req.params.idUsuarios);

})


app.post('/', (req, res) =>{
    console.log(req.body)
    res.send(`O que voce digitou foi: ${req.body.nome}`)
})



app.listen(3000, ()=>{
    console.log('Servidor com a porta 3000');
    console.log('Acessar http://localhost:3000');


})
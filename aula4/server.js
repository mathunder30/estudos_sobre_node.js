const express = require('express');
const app = express();

// crud -> create, read, uptade, delete
//         post, get, put, delete

app.get('/', (req, res) =>{
    res.send(`<form action="/" method = "POST"> Nome do individuo: <input type = "text" name = "nome"> <button>Enviar</button></form> `);

});

app.post('/', (req, res) =>{
    res.send('obrigado peloi formulario enviado')
})

app.get('/contato', (req, res) =>{
    res.send("Obrigado por acessar nossos contatos")
})

app.listen(3000, ()=>{
    console.log('Servidor com a porta 3000');
    console.log('Acessar http://localhost:3000');


})
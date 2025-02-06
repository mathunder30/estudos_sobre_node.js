const express = require('express');
const app = express();

// crud -> create, read, uptade, delete
//         post, get, put, delete

app.get('/', (req, res) =>{
    res.send('Hello world');
});

app.listen(3000, ()=>{
    console.log('Servidor com a porta 3000');
})
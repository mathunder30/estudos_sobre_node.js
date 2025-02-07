const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');
app.use(routes);
app.use(
    express.urlencoded(
        {
            extended: true
        }
    )
)

// crud -> create, read, uptade, delete
//         post, get, put, delete


app.listen(3000, ()=>{
    console.log('Servidor com a porta 3000');
    console.log('Acessar http://localhost:3000');


})
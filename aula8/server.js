const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');
const {middlewaresGlobal} = require('./src/middlewares/middlewares');


app.use(express.urlencoded({extended: true}));
app.use(express.static('./public'));

//nosso proprio meddlewares
app.use(middlewaresGlobal);
app.use(routes);

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');



// crud -> create, read, uptade, delete
//         post, get, put, delete


app.listen(3000, ()=>{
    console.log('Servidor com a porta 3000');
    console.log('Acessar http://localhost:3000');


})
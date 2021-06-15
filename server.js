const express = require('express');
const productos = require('./api/productos');
const routes = require('./routes/index');
const productController = require('./controllers/productController');

// creo una app de tipo express
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/', routes());

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (req, res) => {
    let prod = productos.listar();
    console.log(prod);
    res.render('form', { prod: prod });
});

app.post('/datos', (req, res) => {
    productController.saveProduct(req, res);
    let prod = productos.listar();
    res.render('formulario', { prod: prod });
});


// pongo a escuchar el servidor en el puerto indicado
const puerto = 8080;
const server = app.listen(puerto, () => {
    console.log(`servidor escuchando en http://localhost:${puerto}`);
});

// en caso de error, avisar
server.on('error', error => {
    console.log('error en el servidor:', error);
});
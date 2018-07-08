const express = require('express');
const hbs = require('hbs');
var {ObjectID} = require('mongodb');
var bodyParser = require('body-parser');
var {mongoose} = require('./db/mongoose');

var productController = require('../controllers/productController');
var userController = require('../controllers/userController');

var app = express();

app.use(express.static( './public'));
//put images in public folder
//static files won't work unless taken care of in express.static
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

hbs.registerPartials('./views/partials')
// "./" represents root directory

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
 res.redirect('/shop');
});

app.get('/shop', productController.product_list);

app.get('/about', (req, res)=> {
    res.render('about.hbs',{
        pageTitle: 'About'
    });
   });
   
app.get('/admin', productController.product_list);
app.post('/admin', productController.create_new_product);
//I don't know why this started working

app.get('/product', (req, res)=> {
    res.render('product.hbs',{
        pageTitle: 'Product Name'
    });
   });
app.get('/cart', (req, res)=> {
    res.render('cart.hbs',{
        pageTitle: 'Your Cart'
    });
   });
app.get('/payment', (req, res)=> {
    res.render('payment.hbs',{
        pageTitle: 'Product Name'
    });
   });

app.listen(3000, ()=> {
    console.log("starting up on port 3000");
});
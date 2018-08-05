const express = require('express');
const hbs = require('hbs');
var {ObjectID} = require('mongodb');
var bodyParser = require('body-parser');
var {mongoose} = require('./db/mongoose');

// Require controller modules.
var product_controller = require('../controllers/productController');
var user_controller = require('../controllers/userController');
//var cart_controller = require('../controllers/cartController');
//var wishlist_controller = require('../controllers/wishlistController');

//var route = require('./routes/route');
//till you fix route

var app = express();
const port = process.env.PORT || 3000;
//app.use('/', route);
//till you fix route
app.use(express.static( './public'));
//put images in public folder
//static files won't work unless taken care of in express.static
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

hbs.registerPartials('./views/partials')
// "./" represents root directory

app.set('view engine', 'hbs');

///NON CRUD PAGES ///
app.get('/', (req, res) => {
    res.redirect('/shop');
   });
   
app.get('/about', (req, res)=> {
       res.render('about.hbs',{
           pageTitle: 'About'
       });
      }); 
      
app.get('/admin', (req,res)=>
{   
    res.redirect('/admin/products');
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
/// PRODUCT ROUTES ///

// GET SHOP page.
app.get('/shop', product_controller.product_list_shop);

// GET request for creating a product. NOTE This must come before routes that display product (uses id).
app.get('/admin/product/create', product_controller.product_create_get);

// POST request for creating product.
app.post('/admin/product/create', product_controller.product_create_post);

// GET request to delete product.
app.get('/admin/product/:id/delete', product_controller.product_delete_get);

// POST request to delete product.
app.post('/admin/product/:id/delete', product_controller.product_delete_post);

// GET request to update product.
app.get('/admin/product/:id/update', product_controller.product_update_get);

// POST request to update product.
app.post('/admin/product/:id/update', product_controller.product_update_post);

// GET request for one product.
app.get('/product/:id', product_controller.product_detail);

// GET request for list of all products.
app.get('/admin/products', product_controller.product_list);

app.listen(port, ()=> {
    console.log(`starting up on port${port}`);
});
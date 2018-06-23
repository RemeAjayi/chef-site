const express = require('express');
const hbs = require('hbs');

var app = express();
app.use(express.static( './public'));
//put images in public folder
//static files won't work unless taken care of in express.static
hbs.registerPartials('./views/partials')
// "./" represents root directory

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
 res.redirect('/shop');
});
app.get('/shop', (req, res)=> {
 res.render('shop.hbs', {
     pageTitle: 'Shop'
 });
});
app.get('/about', (req, res)=> {
    res.render('about.hbs',{
        pageTitle: 'About'
    });
   });
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
   app.get('/admin', (req, res)=> {
    res.render('admin_dashboard.hbs',{
        pageTitle: 'Product Name'
    });
   });
app.listen(3000, ()=> {
    console.log("starting up on port 3000");
});
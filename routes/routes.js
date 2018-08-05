var express = require('express');
var router = express.Router();

// Require controller modules.
var product_controller = require('../controllers/productController');
var user_controller = require('../controllers/userController');
var cart_controller = require('../controllers/cartController');
var wishlist_controller = require('../controllers/wishlistController');
///NON CRUD PAGES ///

router.get('/', (req, res) => {
    res.redirect('/shop');
   });
   
router.get('/about', (req, res)=> {
       res.render('about.hbs',{
           pageTitle: 'About'
       });
      }); 
      
router.get('/admin', productController.product_list);
//router.post('/admin', productController.create_new_product);
   //I don't know why this started working

router.get('/cart', (req, res)=> {
       res.render('cart.hbs',{
           pageTitle: 'Your Cart'
       });
      });
router.get('/payment', (req, res)=> {
       res.render('payment.hbs',{
           pageTitle: 'Product Name'
       });
      });
/// PRODUCT ROUTES ///

// GET SHOP page.
router.get('/shop', product_controller.product_list_shop);

// GET request for creating a product. NOTE This must come before routes that display product (uses id).
router.get('/admin/product/create', product_controller.product_create_get);

// POST request for creating product.
router.post('/admin/product/create', product_controller.product_create_post);

// GET request to delete product.
router.get('/admin/product/:id/delete', product_controller.product_delete_get);

// POST request to delete product.
router.post('/admin/product/:id/delete', product_controller.product_delete_post);

// GET request to update product.
router.get('/admin/product/:id/update', product_controller.product_update_get);

// POST request to update product.
router.post('/admin/product/:id/update', product_controller.product_update_post);

// GET request for one product.
router.get('/product/:id', product_controller.product_detail);

// GET request for list of all products.
router.get('/admin/products', product_controller.product_list);

/// USER ROUTES ///


/// CART ROUTES ///

/// WISHLIST ROUTES ///


module.exports = router;
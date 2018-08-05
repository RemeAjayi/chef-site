var Product = require('../models/product');

//show all products
exports.product_list = (req, res) => {
    Product.find().then((products) => {
        res.render('admin.hbs', {products}); 
       }, (e) => {
       res.status(400).send(e);
       });
   };
//display on shop
exports.product_list_shop = (req, res) => {
    Product.find().then((products) => {
        res.send({products});
        //res.render('shop.hbs', {products}); 
       }, (e) => {
       res.status(400).send(e);
       });
   };

// Display Author create form on GET.
exports.product_create_get = function(req, res) {
    res.render('admin_form.hbs');
};

//create new product
exports.product_create_post = (req, res) =>
{     
    //console.log("function is called");
      var product = new Product({
           name: req.body.name,
           price: req.body.price,
           description: req.body.description
        }); //req.body contains the data that the user sends with the request
        
        product.save().then( (doc)=> {

         console.log(doc);
         res.send(doc);
        }, (e) => {
        res.status(400).send(e);
        });
        
        res.redirect('/admin');
};

// Display detail page for a specific product
exports.product_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Author detail: ' + req.params.id);
};

// Display Author delete form on GET.
exports.product_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Author delete GET');
};

// Handle Author delete on POST.
exports.product_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Author delete POST');
};

// Display Author update form on GET.
exports.product_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Author update GET');
};

// Handle Author update on POST.
exports.product_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Author update POST');
};
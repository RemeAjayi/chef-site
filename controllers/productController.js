var Product = require('../models/product');

//show all products
exports.product_list = (req, res) => {
    var page = req.url.substr(1) + ".hbs"; 
    console.log(page);
    Product.find().then((products) => {
        res.render(page, {products});  //or  console.log(req.url);
       }, (e) => {
       res.status(400).send(e);
       });
   };

//create new product
exports.create_new_product = (req, res) =>
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
//head to product details by id
//delete product by id
//edit product by id
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ProductSchema = new Schema(
  {
    name: {type: String, required: true, max: 100},
    price: {type: Number, required: true},
    date_added: {type: Date},
    image_url:{type:String}, //make required when you figure out how to extract it
    category:{type:String, enum: ['Rice', 'Beans', 'Soup', 'Porridge']},
    description: String
  }
);


// Virtual for product's URL
ProductSchema
.virtual('url')
.get(function () {
  return '/products/' + this._id;
});

//Export model
module.exports = mongoose.model('Product', ProductSchema);
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema(
  {
    name: {type: String, required: true, max: 100},
    email: {type: Number, required: true, max: 100},
    cart: [{ type: Schema.Types.ObjectId, ref: 'Product' }],
    wishlist: [{ type: Schema.Types.ObjectId, ref: 'Product' }]
  }
);

// Virtual for user's URL
UserSchema
.virtual('url')
.get(function () {
  return '/users/' + this._id;
});


// Virtual for user's cart
UserSchema
.virtual('cart')
.get(function () {
  return '/users/' + this._id + '/cart';
});

// Virtual for user's wishlist
UserSchema
.virtual('wishlist')
.get(function () {
  return '/users/' + this._id + '/wishlist';
});


//Export model
module.exports = mongoose.model('User', UserSchema);
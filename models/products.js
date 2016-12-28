var mongoose = require( 'mongoose' );

module.exports = mongoose.model('Products', {
  title: String,
  price: Number,
  quantity: Number,
  description: String,
  picture: String
});

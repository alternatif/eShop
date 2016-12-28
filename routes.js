var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');
var Products = require('./models/products.js');
var auth = jwt({
  secret: 'MY_SECRET',
  userProperty: 'payload'
});

var ctrlProfile = require('./profile');
var ctrlAuth = require('./auth');

// profile
router.get('/profile', auth, ctrlProfile.profileRead);

// authentication
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

module.exports = function(app) {


  app.get('/products', function( req, res ) {
          console.log( "Query string", req.query );
          var filter = {};

          // check filters here
          // e.g.:
          // if (req.query.test)
          //    filter.test = req.query.test;

          Products.find(filter, function(err, products ) {
              if (err) throw err;

              products = JSON.stringify( products, null, 2 );
              res.end( products );

          });

      });

      app.get( '/products/:_id', function( req, res ) {
          console.log( "Id ", req.params._id );

          Products.find({ _id: req.params._id }, function( err, product ) {
              if (err) throw err;

              product = JSON.stringify( product, null, 2 );
              res.end( product );

          });

      });

  		app.post( '/products', function( req, res ) {
          console.log( "Adding Product", req.query );
          var filter = {};

          // check filters here
          // e.g.:
          // if (req.query.test)
          //    filter.test = req.query.test;

  		var db = new Products();
          var response = {};
          // fetch email and password from REST request.
          // Add strict validation when you use this in Production.
          db.title = req.body.title;
  				db.price = req.body.price;
  				db.quantity = req.body.quantity;
  				db.description = req.body.description;
  				db.picture = req.body.picture;

  				Products.find({title: req.body.title},function(err,product){
  					var len = product.length;
  					if(len == 0){
  						db.save(function (err) {
  							if (err){
  								response = {"error" : true,"message" : "Error adding data"};
  							} else {
  								response = {"error" : false,"message" : "Product added"};
  							}
  							res.json(db);
  						});
  					}
  				});
  			});


    app.get( '/users', function( req, res ) {
        //todo
    });

    app.get( '/users/:_id', function( req, res ) {
        //todo
    });


    app.get('/*', function(req, res) {
		res.sendfile('index.html', {root: './web'});
	});
};

var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');
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

module.exports = router;

module.exports = function(app) {

	app.post('/login',function(req,res){
    //todo
		 });

		 app.post('/register',function(req,res){
          //todo
	 });


	 app.get( '/items', function( req, res ) {
        //todo

    });

    app.get( '/items/:_id', function( req, res ) {
      //todo

    });

	app.post( '/items', function( req, res ) {
        //todo
			});

    app.get( '/users', function( req, res ) {
        //todo
    });

    app.get( '/users/:_id', function( req, res ) {
        //todo
    });

		router.get('/profile', auth, ctrlProfile.profileRead);

	app.get('*', function(req, res) {
		res.sendfile('./web/index.html');
	});

};

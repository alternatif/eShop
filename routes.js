
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


	app.get('/index', function(req, res) {
		res.sendfile('index.html', {root: '/web'});
	});

  app.get('/register', function(req, res) {
    res.sendfile('register.html', {root: 'web'});
  });

};

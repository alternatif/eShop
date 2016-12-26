
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


	app.get('*', function(req, res) {
		res.sendfile('./web/index.html');
	});

};

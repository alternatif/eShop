var express        = require('express');
var app            = express();
var mongoose       = require('mongoose');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var morgan				 = require('morgan');
var passport = require('passport');
require('./models/db');
require('./config/passport');

var routesApi = require('./routes')

var port = process.env.PORT || 8080;
//mongoose.connect(db.url);
mongoose.connect('mongodb://alternatif:alternatif-gameshop@ds145118.mlab.com:45118/gameshop');
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(express.static(__dirname + '/web'));
app.use(passport.initialize());
app.use('/api', routesApi);
require('./routes')(app);

// error handlers
// Catch unauthorised errors
app.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.status(401);
    res.json({"message" : err.name + ": " + err.message});
  }
});

app.listen(port);
console.log('Listening on port ' + port);
exports = module.exports = app;

var express        = require('express');
var app            = express();
var mongoose       = require('mongoose');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var morgan				 = require('morgan');

var port = process.env.PORT || 8080;
//mongoose.connect(db.url);
mongoose.connect('mongodb://localhost:27017/FullStack');
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(express.static(__dirname + '/web'));
require('./routes')(app);

app.listen(port);
console.log('Listening on port ' + port);
exports = module.exports = app;

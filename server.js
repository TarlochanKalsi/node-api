// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');
var bodyParser = require('body-parser');
var app        = express();
var morgan     = require('morgan');

// configure app
app.use(morgan('dev')); // log requests to the console

// configure body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port     = process.env.PORT || 8080; // set our port

// ROUTES FOR OUR API
// =============================================================================

// create our router
var router = express.Router();

// middleware to use for all requests
router.use(function(req, res, next) {
	// do logging
	console.log('Something is happening.');
	next();
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/components)
router.get('/', function(req, res) {
	res.json({ message: 'Get all the components' });	
});

router.get('/:id', function(req, res) {
	res.json({ message: 'Get the component'});	
});

router.get('/:id/subcomponents', function(req, res) {
	res.json({ message: 'Get all the subcomponent'});	
});

router.post('/', function(req, res) {
	res.json({ message: 'Add a component'});	
});

router.post('/:id/subcomponents', function(req, res) {
	res.json({ message: 'Add a sub-component'});	
});

// REGISTER OUR ROUTES -------------------------------
app.use('/components', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Server started on port ' + port);

var express = require('express')
    , morgan = require('morgan')
    , bodyParser = require('body-parser')
    , methodOverride = require('method-override')
    , app = express()
    , port = process.env.OPENSHIFT_NODEJS_PORT || 1337
    , ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'
    , router = express.Router();

app.use(express.static(__dirname + '/')); // Static assets root directory
app.use(express.static(__dirname + '/assets')); // Static assets directory; /assets/images/ translates to: /images/
app.use(morgan('dev')); // Log all requests to console
app.use(bodyParser()); // Pulls information from HTML via POST
app.use(methodOverride()); // Simulate DELETE and PUT requests

router.get('/', function(req, res, next) {
    res.render('index.html');
});

app.use('/', router);

app.listen(port, ip_address);
console.log('Application is now running on port:', port);

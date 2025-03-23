var express = require('express');
var bodyParser = require('body-parser');

var router = express.Router();

// Middleware to parse request body
router.use(bodyParser.urlencoded({ extended: true }));

console.log("Users route is active");

/* GET users listing */
router.get('/', function(req, res) {
    res.send('Users route is working!');
});

/* POST route to handle user data */
router.post('/', function(req, res) {
    console.log(`First Name: ${req.body.firstname}`);
    console.log(`Last Name: ${req.body.lastname}`);
    res.send('POST received!');
});

module.exports = router;

// const means that the identifier can't be reassigned
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
var PORT = process.env.PORT || 8080;


// create application/json parser 
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({ extended:true}));

// parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: 'application/**json'}))
// parse some custom thing into a Buffer
app.use(bodyParser.raw({ type: 'application/vnd.custom-type'}))
// parse an HTML body into a string
app.use(bodyParser.text({ type: 'text/html'}))


// Static directory  css, index.js,  like assets
app.use(express.static("public"));

// API routes 
require("./app/routing/api-routes.js")(app);
require("./app/routing/html-routes.js")(app);

app.listen(PORT, function() {
    console.log('Listening on port: ' + PORT);
}); 
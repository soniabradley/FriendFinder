var express = require('express');
var path = require('path');

var app = express();


module.exports = function (app) {

    app.get("/survey",function(req, res) {
        res.sendFile(path.join(__dirname + "/../public/survey.html"));
});



// create route for homepage
    app.use(function(req, res) {
        res.sendFile(path.join(__dirname + "/../public/home.html"));
});


}


// setup ====================
var express     = require('express');
var app         = express();
var mongoose    = require('mongoose');
var port = process.env.PORT || 8080;
var database = require('./lib/config/database');


// configuration ====================
mongoose.connect(database.url);

app.configure(function() {
    app.use(express.static(__dirname + '/app'));
    app.use(express.logger('dev'));
    app.use(express.methodOverride());
    app.use(express.json());
});



// routes ====================
require('./lib/routes')(app);

// listen (start app with nodemon server.js) ====================
app.listen(port);
console.log("App listening on port " + port);
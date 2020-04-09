var express = require("express");
var path = require("path");

var app = express();

app.use(express.static('public'));
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", function(request, response) {
	response.render('sites/index');
});

app.listen(3000, () => {
	console.log('Server Started');
});
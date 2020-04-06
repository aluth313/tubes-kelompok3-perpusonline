var express = require("express");
var path = require("path");

var app = express();

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", function(request, response) {
	response.render("index", {
		message: "Hey Everyone! This is my webpage."
	});
});

app.listen(3000, () => {
	console.log('Server Started');
});
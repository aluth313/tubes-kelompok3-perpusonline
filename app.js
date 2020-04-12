//fitur yang digunakan pada perangkat lunak
var express = require("express");
var path = require("path");
var app = express();
app.use(express.static('public'));
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

//routing
app.get("/", function(request, response) {
	response.render('sites/index');
});

//routing
app.get('/admin/dashboard', (req, res) => {
	//variable yang akan dikirim ke view
	var buku = 20;
	var ebook = 25;
	var anggota = 30;
	var pendaftar = 35;

	//mengirim variable ke view
	res.render('sites/admin/dashboard', {
		buku : buku,
		ebook : ebook,
		anggota : anggota,
		pendaftar : pendaftar
	});
});

//port
app.listen(3000, () => {
	console.log('Server Started');
});
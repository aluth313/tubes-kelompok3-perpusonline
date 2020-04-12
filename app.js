var express = require("express");
var path = require("path");

var app = express();

app.use(express.static('public'));
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", function (request, response) {
	response.render('sites/index');
});

app.get('/admin/dashboard', function (req, res) {
	var buku = 20;
	var ebook = 25;
	var anggota = 30;
	var peminjaman = 35;

	res.render('sites/admin/dashboard', {

		buku: buku,
		ebook: ebook,
		anggota: anggota,
		peminjaman: peminjaman
	});

});

app.get('/admin/master/buku', function (req, res) {
	res.render('sites/admin/master/buku')

});
app.get('/admin/master/anggota', function (req, res) {
	res.render('sites/admin/master/anggota')

});
app.get('/admin/master/ebook', function (req, res) {
	res.render('sites/admin/master/ebook')

});
app.get('/admin/master/peminjaman', function (req, res) {
	res.render('sites/admin/master/peminjaman')

});

app.listen(3000, () => {
	console.log('Server Started');
});
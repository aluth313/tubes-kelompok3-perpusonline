//fitur yang digunakan pada perangkat lunak
var express = require("express");
var path = require("path");
var app = express();

const bodyParser = require('body-parser');
app.use(express.static('public'));
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));

const Anggota = require('./models/anggota');
const anggotaRoutes = require('./routes/anggota');
const bukuRoutes = require('./routes/buku');
const peminjamanRoutes = require('./routes/peminjaman');
const penggunaRoutes = require('./routes/pengguna');
const detailRoutes = require('./routes/detail');
const Buku = require('./models/buku');
const Peminjaman = require('./models/peminjaman');
const Pengguna = require('./models/pengguna');

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
app.use('/admin', anggotaRoutes);
app.use('/admin', bukuRoutes);
app.use('/admin', peminjamanRoutes);
app.use('/admin', penggunaRoutes);
app.use('/admin', detailRoutes);



//port
app.listen(3000, () => {
	console.log('Server Started');
});
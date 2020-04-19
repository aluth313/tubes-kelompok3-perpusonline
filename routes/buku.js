const express = require('express');
const router = express.Router();

const Buku = require('../models/buku');


router.get('/buku/tambah', (req, res) => {
    res.render('sites/admin/master/buku/tambah', { data: null });
});

router.post('/buku/tambah', (req, res) => {
    let data = {
        judul: req.body.judulBuku,
        penerbit: req.body.penerbitBuku,
        pengarang: req.body.pengarangBuku,
        tahun: req.body.tahunBuku,
        isbn: req.body.isbnBuku


    };

    Buku
        .create(data)
        .then((buku) => {
            res.render('sites/admin/master/buku/tambah', { data: data });
        })
        .catch((error) => {
            console.log(error);
        })
});

router.get('/buku', (req, res) => {
    Buku
        .findAll()
        .then((buku) => {
            let data = buku;
            res.render('sites/admin/master/buku/buku', { data: data });
        })
        .catch((error) => {
            console.log(error);
        })
});

module.exports = router
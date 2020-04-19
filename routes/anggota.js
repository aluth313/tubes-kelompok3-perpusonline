const express = require('express');
const router = express.Router();

const Anggota = require('../models/anggota');

router.get('/anggota/tambah', (req, res) => {
    res.render('sites/admin/master/anggota/tambah', { data: null });
});

router.post('/anggota/tambah', (req, res) => {
    let data = {
        nip: req.body.nipAnggota,
        nik: req.body.nikAnggota,
        email: req.body.emailAnggota,
        nama: req.body.namaAnggota,
        alamat: req.body.alamatAnggota,
        jenis_kelamin: req.body.jkAnggota,
        kota_lahir: req.body.klAnggota,
        tanggal_lahir: req.body.tlAnggota

    };

    Anggota
        .create(data)
        .then((anggota) => {
            res.render('sites/admin/master/anggota/tambah', { data: data });
        })
        .catch((error) => {
            console.log(error);
        })
});

router.get('/anggota', (req, res) => {
    Anggota
        .findAll()
        .then((anggota) => {
            let data = anggota;
            res.render('sites/admin/master/anggota/anggota', { data: data });
        })
        .catch((error) => {
            console.log(error);
        })
});

module.exports = router
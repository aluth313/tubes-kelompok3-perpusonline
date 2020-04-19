const express = require('express');
const router = express.Router();

const Detail = require('../models/detail');

router.get('/detail/tambah', (req, res) => {
    res.render('sites/admin/master/detail/tambah', { data: null });
});

router.post('/detail/tambah', (req, res) => {
    let data = {
        tanggal_registrasi: req.body.trDetail,
        no_registrasi: req.body.nrDetail,
        status: req.body.statusDetail,
        isbn: req.body.isbnDetail

    };

    Detail
        .create(data)
        .then((detail) => {
            res.render('sites/admin/master/detail/tambah', { data: data });
        })
        .catch((error) => {
            console.log(error);
        })
});

router.get('/detail', (req, res) => {
    Detail
        .findAll()
        .then((detail) => {
            let data = detail;
            res.render('sites/admin/master/detail/detail', { data: data });
        })
        .catch((error) => {
            console.log(error);
        })
});

module.exports = router
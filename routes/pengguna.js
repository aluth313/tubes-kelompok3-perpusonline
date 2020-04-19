const express = require('express');
const router = express.Router();

const Pengguna = require('../models/pengguna');

router.get('/user/tambah', (req, res) => {
    res.render('sites/admin/master/user/tambah', { data: null });
});

router.post('/user/tambah', (req, res) => {
    let data = {
        role: req.body.roleUser,
        email: req.body.emailUser,
        password: req.body.passUser


    };

    Pengguna
        .create(data)
        .then((pengguna) => {
            res.render('sites/admin/master/user/tambah', { data: data });
        })
        .catch((error) => {
            console.log(error);
        })
});

router.get('/user', (req, res) => {
    Pengguna
        .findAll()
        .then((pengguna) => {
            let data = pengguna;
            res.render('sites/admin/master/user/user', { data: data });
        })
        .catch((error) => {
            console.log(error);
        })
});
module.exports = router
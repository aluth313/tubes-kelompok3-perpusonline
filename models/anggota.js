const Sequelize = require('sequelize');

const sequelize = require('../configs/sequelize');

class Anggota extends Sequelize.Model { }

Anggota.init({
    nip: Sequelize.STRING,
    nik: Sequelize.STRING,
    email: Sequelize.STRING,
    nama: Sequelize.STRING,
    alamat: Sequelize.STRING,
    jenis_kelamin: Sequelize.STRING,
    kota_lahir: Sequelize.STRING,
    tanggal_lahir: Sequelize.DATE

}, {
    sequelize, modelName: 'anggota'
});

module.exports = Anggota;
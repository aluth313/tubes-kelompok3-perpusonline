const Sequelize = require('sequelize');

const sequelize = require('../configs/sequelize');

class Peminjaman extends Sequelize.Model { }

Peminjaman.init({
    tanggal_peminjaman: Sequelize.DATE,
    tanggal_pengembalian: Sequelize.DATE,
    status: Sequelize.STRING,
    nip: Sequelize.STRING,
    isbn: Sequelize.STRING,
    no_registrasi: Sequelize.INTEGER


}, {
    sequelize, modelName: 'peminjaman'
});

module.exports = Peminjaman;
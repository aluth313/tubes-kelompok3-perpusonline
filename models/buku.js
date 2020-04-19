const Sequelize = require('sequelize');

const sequelize = require('../configs/sequelize');

class Buku extends Sequelize.Model { }

Buku.init({
    judul: Sequelize.STRING,
    penerbit: Sequelize.STRING,
    pengarang: Sequelize.STRING,
    tahun: Sequelize.INTEGER,
    isbn: Sequelize.STRING


}, {
    sequelize, modelName: 'buku'
});

module.exports = Buku;
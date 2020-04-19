const Sequelize = require('sequelize');

const sequelize = require('../configs/sequelize');

class Detail extends Sequelize.Model { }

Detail.init({
    tanggal_registrasi: Sequelize.DATE,
    no_registrasi: Sequelize.INTEGER,
    status: Sequelize.STRING,
    isbn: Sequelize.STRING


}, {
    sequelize, modelName: 'detail'
});

module.exports = Detail;
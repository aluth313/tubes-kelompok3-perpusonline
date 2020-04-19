const Sequelize = require('sequelize');

const sequelize = require('../configs/sequelize');

class Pengguna extends Sequelize.Model { }

Pengguna.init({
    role: Sequelize.STRING,
    email: Sequelize.STRING,
    password: Sequelize.STRING


}, {
    sequelize, modelName: 'pengguna'
});

module.exports = Pengguna;
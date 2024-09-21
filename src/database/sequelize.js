const { Sequelize, DatTypes } = require('sequelize');

// use sqlite database
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database.sqlite'
});

module.exports = sequelize;
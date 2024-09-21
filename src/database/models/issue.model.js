const { DataTypes } = require("sequelize");
const sequelize = require("../sequelize");

const Issue = sequelize.define("Issue", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
});

module.exports = Issue;
const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const ProductCategory = sequelize.define('productCategory', {
    nameCategory: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

module.exports = ProductCategory;
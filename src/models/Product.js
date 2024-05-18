const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Product = sequelize.define('product', {
    nombreProducto: {
        type: DataTypes.STRING,
        allowNull: false
    },
    imagen:{
      type: DataTypes.TEXT,
      allowNull: false
    }
    //categoriaID
});

module.exports = Product;
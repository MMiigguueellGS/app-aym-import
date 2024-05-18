const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Customer = sequelize.define('customer', {
    nombreCliente: {
        type: DataTypes.STRING,
        allowNull: false
    },
    genre:{
      type: DataTypes.STRING,
      allowNull: false
    }
});

module.exports = Customer;
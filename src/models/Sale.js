const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Sale = sequelize.define('sale', {
    date: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    //customerID (Cliente)
    //usuarioID (vendedor)
});

module.exports = Sale;
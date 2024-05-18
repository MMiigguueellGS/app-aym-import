const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Store = sequelize.define('store', {
  state:{
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: "Bueno"
  },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    stockMin: {
      type: DataTypes.INTEGER,
      allowNull: false
  },
  description:{
    type: DataTypes.TEXT,
    allowNull: true
  }

});

module.exports = Store;
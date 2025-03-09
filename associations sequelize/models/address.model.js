const  { sequelize } = require('../config/DBconnection.js');
const { DataTypes } = require('sequelize');

const AddressModel = sequelize.define('address',{
    id : {
        type : DataTypes.STRING(36),
        defaultValue : DataTypes.UUIDV1,
        primaryKey : true
    },
    country : {
        type : DataTypes.STRING,
        allowNull : false
    },
    livingAt : {
        type : DataTypes.STRING,
        allowNull : false
    },
    userId : {
        type : DataTypes.STRING(36),
        allowNull : true,
        unique : true
    }
},{ paranoid : true });



module.exports = AddressModel;
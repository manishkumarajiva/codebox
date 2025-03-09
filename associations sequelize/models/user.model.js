const { sequelize } = require('../config/DBconnection.js');
const { DataTypes } = require('sequelize');


// @ User Model
const UserModel = sequelize.define('user',{
    id : {
        type : DataTypes.STRING(36),
        defaultValue : DataTypes.UUIDV1,
        primaryKey : true
    },
    fullname : {
        type : DataTypes.STRING,
        allowNull : false
    },
    username : {
        type : DataTypes.STRING,
        allowNull : false,
        unique : true
    },
    password : {
        type : DataTypes.STRING,
        allowNull : false
    }
},{ paranoid : true });


module.exports = UserModel;
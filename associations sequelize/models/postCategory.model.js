const { sequelize } = require('../config/DBconnection.js');
const { DataTypes } = require('sequelize');


// @ Post Category Model
const UserModel = sequelize.define('category',{
    id : {
        type : DataTypes.STRING(36),
        defaultValue : DataTypes.UUIDV1,
        primaryKey : true
    },
    category : {
        type : DataTypes.STRING,
        allowNull : false
    }
},{ paranoid : true });


module.exports = UserModel;
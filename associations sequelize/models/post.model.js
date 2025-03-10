const { sequelize } = require('../config/DBconnection.js');
const { DataTypes } = require('sequelize');


// @ Post Model
const PostModel = sequelize.define('post',{
    id : {
        type : DataTypes.STRING(36),
        defaultValue : DataTypes.UUIDV1,
        primaryKey : true
    },
    title : {
        type : DataTypes.STRING,
        allowNull : false
    },
    content : {
        type : DataTypes.STRING,
        allowNull : false,
    },
    userId : {
        type : DataTypes.STRING(36),
        allowNull : false
    }
},{ paranoid : true });




module.exports = PostModel;
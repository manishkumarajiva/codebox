const { sequelize } = require('../config/DBconnection.js');
const { DataTypes } = require('sequelize');


const CommentModel = sequelize.define('comment',{
    comment : {
        type : DataTypes.STRING,
        allowNull : false
    },
    postId : DataTypes.STRING(36),
    userId : DataTypes.STRING(36)
},{ paranoid : true });


module.exports = CommentModel;
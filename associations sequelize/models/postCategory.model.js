const { sequelize } = require('../config/DBconnection.js');
const { DataTypes } = require('sequelize');


// @ Post Category Model
const PostCategory = sequelize.define('PostCategory',{
    id : {
        type : DataTypes.STRING(36),
        defaultValue : DataTypes.UUIDV1,
        primaryKey : true
    },
    postId : DataTypes.STRING(36),
    categoryId : DataTypes.STRING(36)
},{ paranoid : true });



module.exports = PostCategory;
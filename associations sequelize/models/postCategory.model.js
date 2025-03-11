const { sequelize } = require('../config/DBconnection.js');
const { DataTypes } = require('sequelize');


// @ Post Category Model
const PostCategory = sequelize.define('post_category',{
    id : {
        type : DataTypes.STRING(36),
        defaultValue : DataTypes.UUIDV1,
        primaryKey : true
    },
    postId : {
        type : DataTypes.STRING(36),
        allowNull : false
    },
    categoryId : {
        type : DataTypes.STRING(36),
        allowNull : false
    }
},{ paranoid : true });



module.exports = PostCategoryModel;
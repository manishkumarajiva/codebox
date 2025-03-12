const { sequelize } = require('../config/DBconnection.js');
const { DataTypes } = require('sequelize');
const PostModel = require('./post.model.js');
const CategoryModel = require('./category.model.js');


// @ Post Category Model
const PostCategoryModel = sequelize.define('post_category',{
    id : {
        type : DataTypes.STRING(36),
        defaultValue : DataTypes.UUIDV1,
        primaryKey : true
    },
    postId : {
        type : DataTypes.STRING(36),
        allowNull : false,
        references : {
            model : PostModel,
            key : 'id'
        }
    },
    categoryId : {
        type : DataTypes.STRING(36),
        allowNull : false,
        references : {
            model : CategoryModel,
            key : 'id'
        }
    }
},{ paranoid : true });



module.exports = PostCategoryModel;
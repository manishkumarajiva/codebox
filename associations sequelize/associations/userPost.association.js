const UserModel = require('../models/user.model.js');
const PostModel = require('../models/post.model.js');


/**
 @type --> One To Many Associations
 user and post
 */

 UserModel.hasMany(PostModel,{
    foreignKey : 'userId',
    onDelete : 'CASCADE',
    onUpdate : 'CASCADE'
 });

 
 PostModel.belongsTo(UserModel,{
    foreignKey : 'userId',
    onDelete : 'CASCADE',
    onUpdate : 'CASCADE'
 });
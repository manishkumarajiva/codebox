const PostModel = require('../models/post.model.js');
const CommentModel = require('../models/comment.model.js');


/**
 @type --> One To Many Associations
 post and comment
 */

PostModel.hasMany(CommentModel,{
    foreignKey : 'postId',
    onDelete : 'CASCADE',
    onUpdate : 'CASCADE'
});

CommentModel.belongsTo(PostModel,{
    foreignKey : 'postId',
    onDelete : 'CASCADE',
    onUpdate : 'CASCADE'
});
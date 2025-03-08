const { sequelize } = require('../config/DBconnection.js');
const { DataTypes } = require('sequelize');


const CommentModel = sequelize.define('Comment',{
    comment : {
        type : DataTypes.STRING,
        allowNull : false
    },
    postId : DataTypes.STRING(36),
    userId : DataTypes.STRING(36)
},{ paranoid : true });

CommentModel.associate = (module) => {
    CommentModel.belongsTo(sequelize.define('Post'))
}

module.exports = CommentModel;
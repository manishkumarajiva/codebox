const { sequelize } = require('../config/DBconnection.js');
const { DataTypes, Model } = require('sequelize');


// @ User Model
const UserModel = sequelize.define('User',{
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


UserModel.associate = (models) => {
    UserModel.hasOne(sequelize.define('Address'), { foreignKey : 'userId' });
    UserModel.hasMany(sequelize.define('Post'), { foreignKey : 'userId' });
}

module.exports = UserModel;
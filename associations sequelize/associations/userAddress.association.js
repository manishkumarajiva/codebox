const UserModel = require('../models/user.model.js');
const AddressModel = require('../models/address.model.js');


/**
    @type--> one to one associations
    user with address
*/

UserModel.hasOne(AddressModel,{
    foreignKey : 'userId',
    onDelete : 'CASCADE',
    onUpdate : 'CASCADE'
});


AddressModel.belongsTo(UserModel,{
    foreignKey : 'userId',
    onDelete : 'CASCADE',
    onUpdate : 'CASCADE'
});

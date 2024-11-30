const DB = require('../db/index.js')

const UserModel = {
    GetAllUser : function(callback){
        DB.query('SELECT * FROM users WHERE ROLE = "'+ 'USER' + '"', callback);
    },
    GetUserById : function(id,callback){
        DB.query('SELECT * FROM users WHERE ID = "'+ id +'"', callback);
    },
    DeleteUserById : function(id,callback){
        DB.query('DELETE FROM users WHERE ID = "'+ id +'"', callback);
    }   
};

module.exports = UserModel;


const DB = require('../db/index.js')

const AuthModel = {
    CreateUser : function(user,callback){
        const { NAME, EMAIL, CITY, STATE, PASSWORD, IMAGE } = user;
        DB.query('INSERT INTO users(NAME,EMAIL,CITY,STATE,PASSWORD,IMAGE) VALUES(?,?,?,?,?,?)',[ NAME, EMAIL, CITY, STATE, PASSWORD, IMAGE ], callback);
    },
    FindUserByEmail : function(user,callback){
        const { EMAIL, PASSWORD } = user;
        DB.query('SELECT * FROM users WHERE email = ? AND password = ?', [EMAIL, PASSWORD],callback);
    }
};

module.exports = AuthModel;

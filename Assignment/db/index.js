const mysql = require("mysql");

const DATABASE = mysql.createConnection({
 host : 'localhost',
 user : 'root',
 password : '',
 database : 'project'
});


DATABASE.connect();
console.log('DATABASE CONNECTED')

module.exports = DATABASE;
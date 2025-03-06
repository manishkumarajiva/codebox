const { Sequelize } = require('sequelize');


const sequelize = new Sequelize('associations', 'root', '',{
    host : 'localhost',
    dialect : 'mysql',
    logging : false
});


const DBconnect = (async (req, res) => {
    try {
        await sequelize.authenticate();
        console.log('DATABASE CONNECTED...'.bgYellow);
    } catch (error) {
        console.log('ERROR DURING DATABASE CONNECTION'.red, error)
    }
})()

module.exports = DBconnect;


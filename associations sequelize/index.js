const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const colors = require('colors');
const {DBconnect, sequelize} = require('./config/DBconnection.js');

const port = process.env.PORT || 7000;
const app = express();

// Handle Json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));

app.get('/', function(req, res){
    res.send('Server listening...');
});

/** @Associations */
require('./associations/index.associations.js');

/** @SyncModels */
(async ()=> await sequelize.sync({ force : false }))();

/** @Routes */
require('./routes/index.routes.js');


const HttpServer = http.createServer(app);
HttpServer.listen(port, ()=> console.log('Express Listening on 7000'.rainbow))
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

/** @associations */
require('./associations/userAddress.association.js');
require('./associations/userPost.association.js');
require('./associations/postComment.association.js');

// sync models
(async ()=> await sequelize.sync({force : false }))();


require('./routes/user.routes.js')(app);
require('./routes/category.routes.js')(app);
require('./routes/post.routes.js')(app);
require('./routes/comment.routes.js')(app);


const HttpServer = http.createServer(app);
HttpServer.listen(port, ()=> console.log('Express Listening on 7000'.rainbow))
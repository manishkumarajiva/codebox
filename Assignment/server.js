const express = require('express');
const http = require('http');
const path = require('path');
const bodyParser = require('body-parser');
const indexRoutes = require('./routes/index.js');
var session = require('express-session')


const port = 6600;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

app.set('/views', path.join(__dirname, 'vies'));
app.set('view engine', 'ejs');

app.use(session({ secret: 'sacbredctampnp', resave: false, saveUninitialized: true }));

app.use(express.static(path.join(__dirname, 'upload')));

function logger(req,res,next){
    console.log('NEW SESSION', req.session);
    next();
}

app.use('/',logger, indexRoutes);


http.createServer(app).listen(port, () => console.log(`Server listening on port ${port}`));


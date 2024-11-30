const express = require('express');
const routes = express.Router();
const { SignUpUser, LoginUser, Logout } = require('../controllers/auth.controller.js');
const upload = require('../middleware/multer.js');


routes.post('/signup', upload.single('IMAGE'), SignUpUser);
routes.get('/login', LoginUser);
routes.get('/logout', Logout);

module.exports = routes;
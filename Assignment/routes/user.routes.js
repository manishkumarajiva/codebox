const express = require('express');
const routes = express.Router();
const { GetAllJobeSeeker } = require('../controllers/users.controller.js');
const { CreateJobRequest } = require('../controllers/jobrequest.controller.js');


routes.get('/', GetAllJobeSeeker);
routes.post('/applyjob/:jobid/:userid', CreateJobRequest);

module.exports = routes;
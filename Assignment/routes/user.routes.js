const express = require('express');
const router = express.Router();
const { GetAllJobeSeeker, UpdateProfile } = require('../controllers/users.controller.js');
const { CreateJobRequest } = require('../controllers/jobrequest.controller.js');

router.get('/', GetAllJobeSeeker);
router.post('/applyjob/:jobid/:userid', CreateJobRequest);
router.post('/updateprofile', UpdateProfile);
module.exports = router;
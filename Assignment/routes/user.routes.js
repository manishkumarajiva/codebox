const express = require('express');
const router = express.Router();
const { GetAllJobeSeeker, UpdateProfile } = require('../controllers/users.controller.js');
const { CreateJobRequest } = require('../controllers/jobrequest.controller.js');
const { isUser, isAdmin } = require('../middleware/auth.js');

router.get('/', isAdmin, GetAllJobeSeeker);
router.post('/applyjob/:jobid/:userid', isUser, CreateJobRequest);
router.post('/updateprofile', UpdateProfile);
module.exports = router;
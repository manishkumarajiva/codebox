const express = require('express');
const router = express.Router();
const upload = require('../middleware/multer.js');
const { isAdmin } = require('../middleware/auth.js');

const { CreateJobPost, GetJobPost } = require('../controllers/jobpost.controller.js');
const { UpdateJobPost, DeleteJob } = require('../controllers/jobpost.controller.js');

const { DeleteJobSeeker } = require('../controllers/users.controller.js');

// job post 
router.post('/post', isAdmin, upload.single('CIMAGE'), CreateJobPost);
router.get('/post', isAdmin, GetJobPost);
router.post('/post/update/:id', isAdmin, UpdateJobPost);
router.get('/post/delete/:id', isAdmin, DeleteJob);


// job seekers
router.get('/user/del/:id', isAdmin, DeleteJobSeeker);



module.exports = router;
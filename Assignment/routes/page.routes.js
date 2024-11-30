const express = require('express');
const router = express.Router();

const { LoginForm, SignUpForm, AdminProfile } = require('../controllers/pages.controller.js')
const { HomePage, JobPost, AboutUsPage, ContactPage, ApplyForm } = require('../controllers/pages.controller.js')

const { isUser, isAdmin } = require('../middleware/auth.js')

router.get('/', HomePage);
router.get('/login', LoginForm);
router.get('/signup', SignUpForm);
router.get('/profile', isAdmin, AdminProfile);
router.get('/jobpost',isAdmin, JobPost)
router.get('/apply/:jobid/:userid',isUser, ApplyForm)

router.get('/aboutus', AboutUsPage);
router.get('/contactus', ContactPage);


module.exports = router;
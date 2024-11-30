const express = require('express');
const router = express.Router();

const PageRoutes = require('./page.routes.js');
const AuthRoutes = require('./auth.routes.js');
const AdminRoutes = require('./admin.routes.js');
const UserRoutes = require('./user.routes.js');

router.use('/', PageRoutes);
router.use('/page', PageRoutes);
router.use('/auth', AuthRoutes);
router.use('/admin', AdminRoutes);
router.use('/jobseeker', UserRoutes);

module.exports = router;
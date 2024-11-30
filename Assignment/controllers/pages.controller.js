const { GetJobPost } = require('./jobpost.controller.js');
const DB = require('../db/index.js');

// ----------  PAGES ---------- //



exports.HomePage = async (req, res) => {
    const sess = req.session;
    
    DB.query('SELECT * FROM jobpost', function(err, data){
        if (err) throw err;
        sess.jobpost = data;
        res.render('home', {...sess, user : false});
    })
}

exports.LoginForm = (req, res) => {
    res.render('./form/login');
}


exports.SignUpForm = (req, res) => {
    res.render('./form/register');
}

exports.ApplyForm = (req, res) => {
    const { jobid, userid } = req.params;
    res.render('./form/applyjob',{ jobid : jobid, userid : userid});
}


exports.AdminProfile = (req, res) => {
    const sess = req.session;
    res.render('./admin/profile', {...sess});
}



exports.AboutUsPage = (req, res) => {
    res.render('./pages/about');
}

exports.ContactPage = (req, res) => {
    res.render('./pages/contact');
}




exports.JobPost = (req, res) => {
    res.render('./admin/jobpost');
}
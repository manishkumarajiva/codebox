const AuthModel = require('../models/auth.model.js');
const { GetJobPost }= require('./jobpost.controller.js');
const { GetAllJobeSeeker }= require('./users.controller.js');
const { GetAllRequests } = require('./jobrequest.controller.js');


exports.SignUpUser = (req, res, next) => {
    const user = {...req.body};
    user.IMAGE = req.file.originalname;

    AuthModel.CreateUser(user,function(error, response){
        if(error) return res.render('error', {message : error.message, backlink : '/page/signup'});
        res.redirect('/page/login');
    })
}


exports.LoginUser = async (req, res) => {
    const user = req.query;
    const sess = req.session;

    await GetJobPost(req,res);
    await GetAllJobeSeeker(req,res);
    await GetAllRequests(req,res);

    AuthModel.FindUserByEmail(user,function(error, response){
        if(error) return res.render('error',{message : error.message, backlink : '/page/login'})
        sess.user = response[0];
        
        if(response[0]?.ROLE === 'ADMIN'){
            res.render('./admin/profile',{...sess});
        }else{
            res.render('home',{...sess});
        }
    })
}


exports.Logout = async (req, res) => {
    res.redirect('/');
}
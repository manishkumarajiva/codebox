const UserModel = require("../models/users.model.js");


exports.GetAllJobeSeeker = async(req, res) => {
    
    UserModel.GetAllUser(function(error, data){
        if(error) return res.render('error', { error : {message : error.message, backlink : '/'}});
        req.session.jobseeker = data;
        return;
    });
}


exports.DeleteJobSeeker = async (req, res) => {
    const id = req.params.id;
    const sess = req.session;
    UserModel.DeleteUserById(id, function(error, resp){
        if(error) return res.render('error', { error : {message : error.message, backlink : '/'}});
        res.render('./admin/profile', {...sess})
    })
}



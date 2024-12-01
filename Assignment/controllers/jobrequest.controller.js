const JobRequestModel = require('../models/jobrequest.model.js');

exports.CreateJobRequest = async (req, res) => {
    const { jobid, userid } = req.params;
    const { EMAIL, EXPERIENCE } = req.body;

    const user = {
        USERID: userid,
        JOBPOSTID: jobid,
        EMAIL: EMAIL,
        EXPERIENCE: +EXPERIENCE
    }
    const sess = req.session;

    JobRequestModel.CreateJobRequest(user, function (error, resp) {
        if (error) return res.render('error', { message: error.message, backlink: '/' });
        res.render('home', { ...sess })
    })
}


exports.GetAllRequests = async (req, res) => {

    JobRequestModel.GetAllRequest(async function (error, resp) {
        if (error) return res.render('error', { message: error.message, backlink: '/' });
        list =  JSON.parse(JSON.stringify(resp));
        req.session.jobrequest = list; 
        return;
    })
}


exports.DeleteJobRequest = async (req, res) => {
    const sess = req.session;
    JobRequestModel.DeleteJobRequest(req.params.ID, function(error, resp){
        if (error) return res.render('error', { message: error.message, backlink: '/' });
        res.render('./admin/profile', {...sess});
    })
}
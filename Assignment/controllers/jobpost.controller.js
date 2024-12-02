const JobPostModel = require("../models/job.model.js");


exports.CreateJobPost = async (req, res) => {
    const job = req.body;
    job['CIMAGE'] = req.file.filename;

    JobPostModel.CreateJob(job, async function (error, resp) {
        if (error) return res.render('error', { message: error.message, backlink: '/page/jobpost' });

        JobPostModel.GetJobs(async function (error, data) {
            if (error) return res.render('error', { message: error.message, backlink: '/page/jobpost' });
            res.render('./admin/profile', { ...req.session, jobpost : data });
        })
    })
}


exports.GetJobPost = async (req, res) => {

    JobPostModel.GetJobs(async function (error, data, req) {
        if (error) return res.render('error', { message: error.message, backlink: '/page/jobpost' });
        return data;
    })
}


exports.UpdateJobPost = async (req, res) => {
    const jobdec = req.body;

    JobPostModel.UpdateJob(id, jobdec, function (error, resp) {
        if (error) return res.render('error', { message: error.message, backlink: '/page/jobpost' });
        
        JobPostModel.GetJobs(async function (error, data) {
            if (error) return res.render('error', { message: error.message, backlink: '/page/jobpost' });
            res.render('./admin/profile', { ...req.session, jobpost : data });
        })
    })
}


exports.DeleteJob = async (req, res) => {
    const id = req.params.id;

    JobPostModel.DeleteJob(id, async function (error, resp) {
        if (error) return res.render('error', { message: error.message, backlink: '/page/jobpost' });
        
        JobPostModel.GetJobs(async function (error, data) {
            if (error) return res.render('error', { message: error.message, backlink: '/page/jobpost' });
            res.render('./admin/profile', { ...req.session, jobpost : data });
        })
    })
}




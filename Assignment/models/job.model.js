const DB = require("../db/index.js");


const JobPostModel = {
    CreateJob : function(job,callback){
        const { TYPE, TITLE, COMPANY, DESCRIPTION, CIMAGE } = job;
        DB.query('INSERT INTO jobpost(TITLE, TYPE, COMPANY, IMAGE, DESCRIPTION) VALUES(?,?,?,?,?)',[TITLE, TYPE, COMPANY, CIMAGE, DESCRIPTION], callback);
    },
    GetJobs : function(callback){
        DB.query('SELECT * FROM jobpost', callback);
    },
    UpdateJob : function(id, jobdesc ,callback){
        DB.query('UPDATE jobpost SET DESCRIPTION = "'+ jobdesc +'" WHERE ID = "'+ id +'"', callback);
    },
    DeleteJob : function(id, callback){
        DB.query('DELETE FROM jobpost WHERE ID ="'+ id +'"', callback);
    }
};


module.exports = JobPostModel;
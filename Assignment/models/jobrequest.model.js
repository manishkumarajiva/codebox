const DB = require('../db/index.js');


const ApplyJobModel = {

    CreateJobRequest : function(user, callback){
        const { USERID, JOBPOSTID, EMAIL, EXPERIENCE } = user;
        DB.query('INSERT INTO jobapply(USERID,JOBPOSTID,EMAILID,EXPERIENCE) VALUES(?,?,?,?)',[USERID, JOBPOSTID, EMAIL, EXPERIENCE], callback);
    },
    GetAllRequest : function(callback){
        DB.query('SELECT * FROM jobapply',callback);
    }

}


module.exports = ApplyJobModel;
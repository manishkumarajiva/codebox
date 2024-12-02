const DB = require('../db/index.js');


const JobRequestModel = {

    CreateJobRequest : function(user, callback){
        const { USERID, JOBPOSTID, EMAIL, EXPERIENCE } = user;
        DB.query('INSERT INTO jobapply(USERID,JOBPOSTID,EMAILID,EXPERIENCE) VALUES(?,?,?,?)',[USERID, JOBPOSTID, EMAIL, EXPERIENCE], callback);
    },
    GetAllRequest : function(callback){
        DB.query('SELECT * FROM jobapply',callback);
    },
    AcceptRequest : function(id, callback){
        const ID = id;
        DB.query('UPDATE jobapply SET ACCEPT = ? WHERE ID = ?',[true, ID], callback);
    },
    RejectRequest : function(id, callback){
        const ID = id;
        DB.query('UPDATE jobapply SET ACCEPT = ? WHERE ID = ?',[false, ID], callback);
    }

}


module.exports = JobRequestModel;
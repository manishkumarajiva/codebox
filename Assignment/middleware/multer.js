const multer = require('multer');


const Storage = multer.diskStorage({
    destination : function(req, file, callback){
        
        if(file.fieldname === 'IMAGE'){
            callback(null, 'upload/users');
        }else{
            callback(null, 'upload/company');
        }
    },
    filename : function(req, file, callback){
        callback(null, file.filename = file.originalname);
    }
})


const upload = multer({ storage : Storage });

module.exports = upload;
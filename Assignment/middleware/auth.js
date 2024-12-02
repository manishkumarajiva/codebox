exports.isAdmin = (req, res, next) => {
    if(req.session.user?.ROLE === 'ADMIN'){
        next();
    }else{
        res.redirect('/');
    }
}

exports.isUser = (req, res, next) => {
    if(req.session.user?.ROLE === 'USER'){
        next();
    }else{
        redirect('/');
    }
}
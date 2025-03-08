const { SignUp, SignIn } = require('../controllers/user.controller.js');


module.exports = (app) => {
    app.post('/api/user/signup', SignUp);
    app.post('/api/user/signin', SignIn);
}

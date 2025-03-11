const { CreateComment, FetchComment, DeleteComment } = require('../controllers/comment.controller.js');

module.exports = (app) => {
    app.post('/api/comment', CreateComment);
    app.get('/api/comment/:id', FetchComment)
    app.delete('/api/comment/:id', DeleteComment);
}
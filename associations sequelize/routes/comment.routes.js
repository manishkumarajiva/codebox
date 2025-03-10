const { CreateComment, DeleteComment } = require('../controllers/comment.controller.js');

module.exports = (app) => {
    app.post('/api/comment', CreateComment);
    app.delete('/api/comment/:id', DeleteComment);
}
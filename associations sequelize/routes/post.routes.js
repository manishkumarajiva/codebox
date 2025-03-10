const { CreatePost, FetchPosts, DeletePost } = require('../controllers/post.controller.js');

module.exports = (app) => {
    app.post('/api/post', CreatePost);
    app.get('/api/post/:id', FetchPosts);
    app.delete('/api/post/:id', DeletePost);
};
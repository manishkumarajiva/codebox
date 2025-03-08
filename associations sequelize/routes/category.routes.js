const { CreateCategory, GetCategories, DeleteCategory } = require('../controllers/category.controller.js');

module.exports = (app) => {
    app.post('/api/category', CreateCategory);
    app.get('/api/category', GetCategories);
    app.delete('/api/category/:id', DeleteCategory);
};
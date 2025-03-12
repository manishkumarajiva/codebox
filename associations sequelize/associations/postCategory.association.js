const PostCategoryModel = require('../models/postCategory.model.js');
const PostModel = require('../models/post.model.js');
const CategoryModel = require('../models/category.model.js');

/**
    @type --> Many To Many Associations
    using @Junction Model is PostCategoryMode
*/


PostModel.belongsToMany(CategoryModel, { through : PostCategoryModel });
CategoryModel.belongsToMany(PostModel, { through : PostCategoryModel });
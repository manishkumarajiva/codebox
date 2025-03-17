module.exports = (app) => {
  require("./user.routes.js")(app);
  require("./category.routes.js")(app);
  require("./post.routes.js")(app);
  require("./comment.routes.js")(app);
};

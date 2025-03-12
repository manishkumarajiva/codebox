module.exports = (app) => {
  require("./routes/user.routes.js")(app);
  require("./routes/category.routes.js")(app);
  require("./routes/post.routes.js")(app);
  require("./routes/comment.routes.js")(app);
};

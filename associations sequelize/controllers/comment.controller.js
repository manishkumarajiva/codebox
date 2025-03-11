const CommentModel = require("../models/comment.model.js");
const PostModel = require("../models/post.model.js");

const CreateComment = async (req, res) => {
  const { comment, postId, userId } = req.body;

  try {
    const postComment = await CommentModel.create({
      comment: comment,
      postId: postId,
      userId: userId,
    });

    if (!postComment)
      return res
        .status(200)
        .json({ status: 400, success: false, message: "Failed To Comment" });

    res
      .status(201)
      .json({
        status: 201,
        success: true,
        message: "Successfully Comment",
        data: postComment,
      });
  } catch (error) {
    console.log("ERROR DURING COMMENT", error);
    res.status(500).json({ status: 500, success: false, error: error.stack });
  }
};


const FetchComment = async (req, res) => {
    const id = req.params.id;
  try {
    const comments = await CommentModel.findAll({where : { postId : id}, include : {model : PostModel}});

    if(!comments.length){
        return res.status(200).json({ status : 200, success : false, message : 'Empty Comments'});
    }

    res.status(200).json({ status : 200, success : true, message : 'Fetch Successfully', data : comments });
  } catch (error) {
    console.log("ERROR DURING COMMENT", error);
    res.status(500).json({ status: 500, success: false, error: error.stack });
  }
};

const DeleteComment = async (req, res) => {
  try {
    const comment = await CommentModel.findByPk(req.params.id);
    if (!comment)
      return res
        .status(200)
        .json({ status: 400, success: false, message: "Not Found" });

    await comment.destroy();
    res
      .status(200)
      .json({
        status: 200,
        success: true,
        message: "Successfully Deleted",
        data: comment,
      });
  } catch (error) {
    console.log("ERROR DURING COMMENT", error);
    res.status(500).json({ status: 500, success: false, error: error.stack });
  }
};

module.exports = { CreateComment, FetchComment, DeleteComment };

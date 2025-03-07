const PostModel = require('../models/post.model.js');


const CreatePost = async (req, res) => {
    const { title, content } = req.body;
    const id = req.userId;

    try {
        const post = await PostModel.create({
            title : title,
            content : content,
            userId : id
        });

        if(!post) return res.status(200).json({ status : 400, success : false, message : 'Failed To Create' });

        res.status(201).json({ status : 201, success : true, message : 'Successfully Post', data : post });
    } catch (error) {
        console.log('ERROR DURING CREATE POST', error);
        res.status(500).json({ status : 500, success : false, error : error.stack })
    }
};


const FetchPosts = async (req, res) => {
    const id = req.userId;

    try {
        const posts = await PostModel.findAll({ where : { userId : id }});
        if(!posts.length) return res.status(200).json({ status : 200, success : true, message : 'Empty Posts' });

        res.status(200).json({ status : 200, success : true, message : 'Successfully Fetched', data : posts });
    } catch (error) {
        console.log('ERROR DURING FETCH POST', error);
        res.status(500).json({ status : 500, success : false, error : error.stack })
    }
};



const DeletePost = async (req, res) => {
    try {
        const post = await PostModel.findByPk(req.params.id);
        if(!post) return res.status(200).json({ status : 200, success : false, message : 'Not Found' });

        await post.destroy();
        res.status(200).json({ status : 200, success : true, message : 'Successfully Deleted', data : post });
    } catch (error) {
        console.log('ERROR DURING DELETE POST', error);
        res.status(500).json({ status : 500, success : false, error : error.stack })
    }
};


module.exports = { CreatePost, FetchPosts, DeletePost };
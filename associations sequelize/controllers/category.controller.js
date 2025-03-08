const CategoryModel = require('../models/category.model.js');


const CreateCategory = async (req, res) => {

    try {
        const category = await CategoryModel.findOne({ where : { category : req.body.category }});
        if(category) return res.status(200).json({ status : 200, success : false, message : 'Already Exist' });


        const createResp = await CategoryModel.create({
            category : req.body.category
        });

        if(!createResp) return res.status(200).json({ status : 400, success : false, message : 'Failed To Create' });

        res.status(201).json({ status : 201, success : true, message : 'Successfully Created', data : createResp });

    } catch (error) {
        res.status(500).json({ status : 500, success : false, error : error });
    }
};


const GetCategories = async (req, res) => {

    try {
        const category = await CategoryModel.findAll({});
        if(!category.length) return res.status(200).json({ status : 400, success : false, message : 'Empty' });

        res.status(201).json({ status : 200, success : true, message : 'Successfully Created', data : category });

    } catch (error) {
        res.status(500).json({ status : 500, success : false, error : error });
    }
};


const DeleteCategory = async (req, res) => {
    try {
        const category = await CategoryModel.findByPk(req.params.id, { paranoid : false});
        if(!category) return res.status(200).json({ status : 400, success : false, message : 'Not Found' });

        await category.destroy({ force : true });

        res.status(201).json({ status : 200, success : true, message : 'Successfully Deleted', data : category });

    } catch (error) {
        res.status(500).json({ status : 500, success : false, error : error });
    }
};



module.exports = { CreateCategory, GetCategories, DeleteCategory };
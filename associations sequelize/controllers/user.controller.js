const UserModel = require('../models/user.model.js');
const AddressModel = require('../models/address.model.js');
const colors = require('colors');



const SignUp = async (req, res) => {
    console.log('signup')
    const { fullname, country, address, username, password } = req.body;

    try {
        const alreadyExist = await UserModel.findOne({where : { username : username }});
        if(alreadyExist) return res.status(200).json({status : 200, success : false, message : "Already Registered"});

        const create = await UserModel.create({
            fullname : fullname,
            username : username,
            password : password
        });

        if(!create) return res.status(200).json({ status : 400, success : false, message : "Failed To Registered"});

        if(country){
            const addAddress = await AddressModel.create({
                country : country,
                livingAt : address,
                userId : create.id
            })
        }

        res.status(201).json({ status : 201, success : true, message : 'Successfully Created', data : create });
    } catch (error) {
        console.log('ERROR DURING REGISTERATION'.red);
        res.status(500).json({ status : 500, success : false, message : error.message, error : error });
    }
}



const SignIn = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await UserModel.findOne({ where : { username : username }});
        if(!user) return res.status(200).json({ status : 403, success : false, message : "User Not Found"});

        if(password !== user.password){
            return res.status(200).json({ status : 400, success : false, message : "Incorrect Password"});
        }

        res.status(200).json({ status : 200, success : true, message : 'Successfully Loggedin', data : user });
    } catch (error){
        console.log('ERROR DURING LOGIN'.yellow);
        res.status(500).json({ status : 500, success : false, message : error.message, err : error });
    }
}


module.exports = { SignUp, SignIn };
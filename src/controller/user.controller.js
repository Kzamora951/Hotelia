const User = require('../model/User');

exports.obtener = async (req,res)=>{
    try {
        const Users =await User.find();
        res.status(200).json(Users);
    } catch (error) {
        res.status(500).json(error);
    }
}
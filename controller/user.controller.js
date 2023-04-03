const userService = require('../services/user.services');

exports.register = async(req,res,next)=>{
    try{
        const {email,password} = req.body;

        const successRes = await userService.registerUser(email,password);
        res.json({status:true, success:"User registered successfully"});
        }
    catch(err){
        throw err;
    }
}
exports.login = async (req,res,next)=>{
    try{
        const {email,password} = req.body;
        const user = await userService.checkuser(email);
        if(!user){
            throw new Error('user dont exist');
        }
        const isMatch = await user.comparePassword(password);
        if(isMatch == false){
            throw new Error('Password invalid');
        }
        let tokenData = {_id:user._id,email:user.email};

        const token = await userService.generateToken(tokenData, "secretKey", '1h');
        res.status(200).json({status:true, token:token});
        }
    catch(err){
        throw err;
    }
}
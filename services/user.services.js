const userModel = require('../model/user.model');

class userService{
    static async registerUser(email,password){
        try{
            const createUser = new userModel({email,password});
            return await createUser.save();
        }
        catch(err){
            throw err;
        }
    }
}
module.exports = userService;
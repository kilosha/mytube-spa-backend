import UserModel from "../models/user.model.js";

class AuthServices {
    async getUser(username) {
        const user = await UserModel.findOne({username});
        return user || {};
    }
}

export default new AuthServices();
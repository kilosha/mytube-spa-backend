import UserModel from "../models/user.model.js";

class UsersServices {
    async createUser(userInfo) {
        const user = await new UserModel(userInfo).save();
        return user.toObject();
    }
}

export default new UsersServices;
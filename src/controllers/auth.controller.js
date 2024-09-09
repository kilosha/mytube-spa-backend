// import { validationResult } from "express-validator";
import * as bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import AuthServices from "../services/auth.service.js";

class AuthControllers {
    async login(req, res) {
        // const errors = validationResult(req);

        // if (!errors.isEmpty()) {
        //   return res.status(400).send({
        //       success: false,
        //       errors: errors.array()
        //   });
        // } else {
        try {
            const { username, password } = req.body;
            const user = await AuthServices.getUser(username);

            if (Object.keys(user).length) {
                const ID = user._id;
                const compareUser = await bcrypt.compare(password, user.password);
                if (compareUser) {
                    const token = jwt.sign({ username, ID }, process.env.ACCESS_TOKEN_SECRET);
                    res.send({ token });
                } else {
                    throw new Error("Пароль не правильный!");
                }
            } else {
                throw new Error("Такого пользователя нет!");
            }
        } catch (err) {
            res.status(400).send({ message: err.message });
        }
        // }
    }
}

export default new AuthControllers();
import * as bcrypt from "bcrypt";

import UsersServices from "../services/users.service.js";

class UsersControllers {
    async createUser(req, res) {
        // const errors = validationResult(req);
        // const isUserNameAlreadyUsed = await UsersServices.checkUsernameUsage(req.body.username);
        // let errorsStrorage = [];

        // if (isEmailAlreadyUsed || isUserNameAlreadyUsed) {
        //     const alreadyUsedErrors = Utils._createErrors(isUserNameAlreadyUsed, isEmailAlreadyUsed, req.body.username, req.body.email);
        //     errorsStrorage.push(alreadyUsedErrors);
        // }
        
        // if (!errors.isEmpty() || errorsStrorage.length) {
        //     return res.status(400).send({
        //         success: false,
        //         errors: errors.array().concat(...errorsStrorage)
        //     });
        // } else {
            try {
                const hashedPassword = await bcrypt.hash(req.body.password, Number(process.env.SALT_ROUNDS));
                const newUser = {...req.body, password: hashedPassword};
                const newDBUser = await UsersServices.createUser(newUser);
                res.send(newDBUser);
            } catch (e) {
                //Sentry.captureException(e);
                res.status(400).send({ message: e.message });
            }
        // }
    }
}

export default new UsersControllers();
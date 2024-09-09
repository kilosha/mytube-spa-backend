import express from "express";
import UsersControllers from "../controllers/users.controller.js";

const router = express.Router();

router.post("/register", UsersControllers.createUser);

export default router;